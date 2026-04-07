import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoPatryally from '@/assets/logo-watermark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/medicina', label: t('nav.health') },
    { href: '/experiencias', label: t('nav.tours') },
    { href: '/viajes-personalizados', label: t('nav.customTrips') },
    { href: '/logistica', label: t('nav.logistics') },
    { href: '/tarifas', label: t('nav.pricing') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'top-0 bg-primary shadow-lg py-2' 
          : '-top-20 bg-transparent py-0'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoPatryally} 
              alt="Patry Ally" 
              className={cn(
                "transition-all duration-500 brightness-0 invert drop-shadow-[0_0_35px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_50px_rgba(255,255,255,1)] group-hover:scale-110 group-hover:rotate-1 animate-fly-in",
                isScrolled 
                  ? "h-16 md:h-20" 
                  : "h-52 md:h-64 mt-8"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-base font-semibold transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)] relative group',
                  'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-500 hover:after:w-full',
                  'before:absolute before:inset-0 before:bg-white/10 before:rounded-lg before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100',
                  'hover:-translate-y-1 hover:scale-110 hover:text-secondary',
                  isScrolled 
                    ? 'text-white' 
                    : 'text-white',
                  location.pathname === link.href && 'text-secondary after:w-full'
                )}
                style={{ 
                  animation: `fade-in 0.6s ease-out ${index * 0.15}s both, scale-in 0.4s ease-out ${index * 0.15}s both`
                }}
              >
                <span className="relative z-10 group-hover:animate-pulse">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-2",
                isScrolled ? "text-white hover:bg-white/10" : ""
              )}
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </Button>
            <Button 
              asChild 
              className="rounded-full px-6 bg-secondary hover:bg-secondary/90 text-white"
            >
              <Link to="/#contacto">{t('nav.cta')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={isScrolled ? "text-white" : ""}
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? "text-white" : ""}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 mt-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium transition-colors',
                  isScrolled ? 'text-white/80' : 'text-foreground/80',
                  location.pathname === link.href && (isScrolled ? 'text-white' : 'text-primary')
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="mt-4 rounded-full bg-secondary hover:bg-secondary/90 text-white"
            >
              <Link to="/#contacto" onClick={() => setIsOpen(false)}>
                {t('nav.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
