import * as React from 'react';
import { format, differenceInDays } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { CalendarIcon, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const hotels = [
  { id: 'novotel', name: 'NOVOTEL', pricePerNight: 244 },
  { id: 'blue', name: 'HOTEL BLUE & SUITES', pricePerNight: 160 },
  { id: 'ibis', name: 'IBIS HOTEL', pricePerNight: 166 },
  { id: 'urbit', name: 'HOTEL URBIT LAURELES', pricePerNight: 126 },
];

const DatePriceCalculator = () => {
  const { language, t } = useLanguage();
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [selectedHotel, setSelectedHotel] = React.useState<string>('novotel');
  const [persons, setPersons] = React.useState<string>('2');

  const locale = language === 'es' ? es : enUS;

  const calculatePrice = () => {
    if (!startDate || !endDate) return null;
    
    const nights = differenceInDays(endDate, startDate);
    if (nights <= 0) return null;

    const hotel = hotels.find(h => h.id === selectedHotel);
    if (!hotel) return null;

    const numPersons = parseInt(persons);
    const basePrice = hotel.pricePerNight * nights;
    const totalPrice = basePrice * (numPersons > 2 ? 1 + (numPersons - 2) * 0.3 : 1);

    return {
      nights,
      priceUSD: Math.round(totalPrice),
      priceCOP: Math.round(totalPrice * 3700),
      hotel: hotel.name,
    };
  };

  const result = calculatePrice();

  return (
    <div className="bg-card rounded-3xl border border-border shadow-soft p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <h3 className="font-montserrat font-bold text-lg text-foreground">
            {t('pricing.calculator.title')}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t('pricing.calculator.subtitle')}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Start Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t('pricing.calculator.startDate')}
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !startDate && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, 'PPP', { locale }) : t('pricing.calculator.selectDate')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t('pricing.calculator.endDate')}
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !endDate && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, 'PPP', { locale }) : t('pricing.calculator.selectDate')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                disabled={(date) => date < (startDate || new Date())}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Hotel Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t('pricing.calculator.hotel')}
          </label>
          <Select value={selectedHotel} onValueChange={setSelectedHotel}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t('pricing.calculator.selectHotel')} />
            </SelectTrigger>
            <SelectContent>
              {hotels.map((hotel) => (
                <SelectItem key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Persons Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t('pricing.calculator.persons')}
          </label>
          <Select value={persons} onValueChange={setPersons}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 {t('pricing.calculator.person')}</SelectItem>
              <SelectItem value="2">2 {t('pricing.calculator.people')}</SelectItem>
              <SelectItem value="3">3 {t('pricing.calculator.people')}</SelectItem>
              <SelectItem value="4">4 {t('pricing.calculator.people')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Result */}
      {result ? (
        <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {result.nights} {result.nights === 1 ? t('pricing.calculator.night') : t('pricing.calculator.nights')} • {result.hotel}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('pricing.calculator.estimate')}
              </p>
            </div>
            <div className="text-right">
              <p className="font-montserrat font-bold text-3xl text-secondary">
                ${result.priceUSD.toLocaleString()} USD
              </p>
              <p className="text-sm text-muted-foreground">
                ≈ ${result.priceCOP.toLocaleString()} COP
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-muted/30 rounded-2xl p-6 text-center">
          <p className="text-muted-foreground">
            {t('pricing.calculator.placeholder')}
          </p>
        </div>
      )}
    </div>
  );
};

export default DatePriceCalculator;
