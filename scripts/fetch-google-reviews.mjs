// Trae las reseñas de Google del Perfil de Empresa y las guarda en
// src/data/googleReviews.json. Pensado para correr desde GitHub Actions
// dos veces por semana (ver .github/workflows/sync-google-reviews.yml),
// no en cada visita al sitio — así el uso real de la API es ~8 llamadas
// al mes, muy por debajo del límite gratuito de Google.
//
// Variables de entorno requeridas:
//   GOOGLE_PLACES_API_KEY  -> API key con "Places API (New)" habilitada
//   GOOGLE_PLACE_ID        -> Place ID de Patry Ally (herramienta oficial:
//                             https://developers.google.com/maps/documentation/places/web-service/place-id)
//
// Uso local:  GOOGLE_PLACES_API_KEY=xxx GOOGLE_PLACE_ID=yyy node scripts/fetch-google-reviews.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.resolve(__dirname, '../src/data/googleReviews.json');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

if (!API_KEY || !PLACE_ID) {
  console.error(
    'Faltan variables de entorno: GOOGLE_PLACES_API_KEY y/o GOOGLE_PLACE_ID.'
  );
  process.exit(1);
}

const FIELD_MASK = [
  'id',
  'rating',
  'userRatingCount',
  'googleMapsUri',
  'reviews.text',
  'reviews.rating',
  'reviews.publishTime',
  'reviews.authorAttribution',
].join(',');

function loadExisting() {
  try {
    const raw = readFileSync(DATA_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.reviews) ? parsed.reviews : [];
  } catch {
    return [];
  }
}

// Identificador estable por reseña: no todas las respuestas de Google
// traen el mismo id interno entre llamadas, así que combinamos autor +
// fecha de publicación (eso sí es estable) para saber si ya la teníamos.
function reviewKey(review) {
  const author = review.authorAttribution?.displayName ?? 'anonimo';
  const publishTime = review.publishTime ?? '';
  return `${author}__${publishTime}`;
}

async function main() {
  const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': FIELD_MASK,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places API respondió ${res.status}:\n${body}`);
  }

  const place = await res.json();

  const fetched = (place.reviews ?? [])
    .map((r) => ({
      id: reviewKey(r),
      source: 'google',
      author: r.authorAttribution?.displayName ?? 'Cliente de Google',
      authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
      text: r.text?.text ?? '',
      rating: r.rating ?? 5,
      publishTime: r.publishTime ?? null,
    }))
    .filter((r) => r.text.trim().length > 0);

  const existing = loadExisting();
  const existingIds = new Set(existing.map((r) => r.id));
  const nuevas = fetched.filter((r) => !existingIds.has(r.id));

  // Acumulamos: Google solo nos da hasta 5 reseñas "vigentes" por llamada,
  // pero como revisamos seguido, vamos guardando todas las que hemos visto
  // alguna vez, aunque luego Google deje de devolverlas en el top 5.
  const merged = [...existing];
  for (const r of nuevas) merged.push(r);
  merged.sort((a, b) => new Date(b.publishTime ?? 0) - new Date(a.publishTime ?? 0));

  const out = {
    rating: place.rating ?? null,
    userRatingCount: place.userRatingCount ?? null,
    googleMapsUri: place.googleMapsUri ?? null,
    updatedAt: new Date().toISOString(),
    reviews: merged,
  };

  mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  writeFileSync(DATA_PATH, JSON.stringify(out, null, 2) + '\n');

  console.log(
    `Listo. ${nuevas.length} reseña(s) nueva(s) de Google. Total guardadas: ${merged.length}.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
