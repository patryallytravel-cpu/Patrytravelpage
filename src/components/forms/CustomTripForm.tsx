import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CustomTripForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    travelDate: '',
    tripLength: '',
    travelers: '',
    flexibleDate: false,
    budget: '',
    accommodation: '',
    comments: '',
    fullName: '',
    phone: '',
    email: '',
    country: '',
    howHeard: '',
  });

  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const places = [
    'Medellín', 'Antioquia', 'Eje Cafetero', 'Chocó', 'Bogotá',
    'Santa Marta', 'Cartagena', 'Guajira', 'San Agustín', 'Amazonas'
  ];

  const interests = [
    'customTrip.interest.gastronomy',
    'customTrip.interest.city',
    'customTrip.interest.graffiti',
    'customTrip.interest.coffee',
    'customTrip.interest.nature',
    'customTrip.interest.cooking',
    'customTrip.interest.urban',
    'customTrip.interest.communities',
    'customTrip.interest.culture',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('form.success.title'),
      description: t('form.success.desc'),
    });
    
    setFormData({
      travelDate: '',
      tripLength: '',
      travelers: '',
      flexibleDate: false,
      budget: '',
      accommodation: '',
      comments: '',
      fullName: '',
      phone: '',
      email: '',
      country: '',
      howHeard: '',
    });
    setSelectedPlaces([]);
    setSelectedInterests([]);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePlace = (place: string) => {
    setSelectedPlaces(prev => 
      prev.includes(place) 
        ? prev.filter(p => p !== place)
        : [...prev, place]
    );
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Travel Details */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="travelDate">{t('customTrip.form.travelDate')}</Label>
          <Input
            id="travelDate"
            name="travelDate"
            type="date"
            value={formData.travelDate}
            onChange={handleChange}
            className="bg-background border-border rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tripLength">{t('customTrip.form.tripLength')}</Label>
          <Input
            id="tripLength"
            name="tripLength"
            placeholder={t('customTrip.form.tripLengthPlaceholder')}
            value={formData.tripLength}
            onChange={handleChange}
            className="bg-background border-border rounded-lg"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="travelers">{t('customTrip.form.travelers')}</Label>
          <Input
            id="travelers"
            name="travelers"
            type="number"
            min="1"
            placeholder="1"
            value={formData.travelers}
            onChange={handleChange}
            className="bg-background border-border rounded-lg"
          />
        </div>
        <div className="space-y-2 flex items-end">
          <div className="flex items-center gap-2">
            <Checkbox
              id="flexibleDate"
              checked={formData.flexibleDate}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, flexibleDate: checked === true }))
              }
            />
            <Label htmlFor="flexibleDate" className="text-sm">
              {t('customTrip.form.flexible')}
            </Label>
          </div>
        </div>
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <Label>{t('customTrip.form.budget')}</Label>
        <Select
          value={formData.budget}
          onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
        >
          <SelectTrigger className="bg-background border-border rounded-lg">
            <SelectValue placeholder={t('customTrip.form.selectBudget')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under50">&lt;50 USD</SelectItem>
            <SelectItem value="50-150">50 - 150 USD</SelectItem>
            <SelectItem value="150-250">150 - 250 USD</SelectItem>
            <SelectItem value="250-350">250 - 350 USD</SelectItem>
            <SelectItem value="over350">&gt;350 USD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Accommodation */}
      <div className="space-y-2">
        <Label>{t('customTrip.form.accommodation')}</Label>
        <Select
          value={formData.accommodation}
          onValueChange={(value) => setFormData(prev => ({ ...prev, accommodation: value }))}
        >
          <SelectTrigger className="bg-background border-border rounded-lg">
            <SelectValue placeholder={t('customTrip.form.selectAccommodation')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">{t('customTrip.form.individual')}</SelectItem>
            <SelectItem value="double">{t('customTrip.form.double')}</SelectItem>
            <SelectItem value="multiple">{t('customTrip.form.multiple')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Places */}
      <div className="space-y-3">
        <Label>{t('customTrip.form.places')}</Label>
        <div className="flex flex-wrap gap-2">
          {places.map((place) => (
            <button
              key={place}
              type="button"
              onClick={() => togglePlace(place)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                selectedPlaces.includes(place)
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-background border-border text-muted-foreground hover:border-secondary'
              }`}
            >
              {place}
            </button>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="space-y-3">
        <Label>{t('customTrip.form.interests')}</Label>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                selectedInterests.includes(interest)
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-background border-border text-muted-foreground hover:border-secondary'
              }`}
            >
              {t(interest)}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Comments */}
      <div className="space-y-2">
        <Label htmlFor="comments">{t('customTrip.form.comments')}</Label>
        <Textarea
          id="comments"
          name="comments"
          placeholder={t('customTrip.form.commentsPlaceholder')}
          value={formData.comments}
          onChange={handleChange}
          rows={3}
          className="bg-background border-border rounded-lg resize-none"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-6">
        <h4 className="font-montserrat font-semibold text-foreground mb-4">
          {t('customTrip.form.travelerInfo')}
        </h4>
      </div>

      {/* Personal Info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">{t('customTrip.form.fullName')}</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder={t('customTrip.form.fullNamePlaceholder')}
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-background border-border rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t('customTrip.form.phone')}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background border-border rounded-lg"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t('customTrip.form.email')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background border-border rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">{t('customTrip.form.country')}</Label>
          <Input
            id="country"
            name="country"
            placeholder={t('customTrip.form.countryPlaceholder')}
            value={formData.country}
            onChange={handleChange}
            className="bg-background border-border rounded-lg"
          />
        </div>
      </div>

      {/* How did you hear */}
      <div className="space-y-2">
        <Label>{t('customTrip.form.howHeard')}</Label>
        <Select
          value={formData.howHeard}
          onValueChange={(value) => setFormData(prev => ({ ...prev, howHeard: value }))}
        >
          <SelectTrigger className="bg-background border-border rounded-lg">
            <SelectValue placeholder={t('customTrip.form.selectSource')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="referral">{t('customTrip.form.referral')}</SelectItem>
            <SelectItem value="other">{t('customTrip.form.other')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-lg h-12 text-base font-semibold"
      >
        {isSubmitting ? '...' : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {t('customTrip.form.submit')}
          </>
        )}
      </Button>
    </form>
  );
};

export default CustomTripForm;
