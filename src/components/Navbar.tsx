import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface NavbarProps {
  onOpenPlaceholdersModal?: () => void;
  onGetStartedClick?: () => void;
}

export default function Navbar({ onOpenPlaceholdersModal, onGetStartedClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onGetStartedClick) {
      onGetStartedClick();
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Golden Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACC15] via-[#FDE047] to-[#CA8A04] origin-left z-50 shadow-sm shadow-[#FACC15]/40"
        style={{ scaleX }}
      />

      {/* Notice Banner with Direct Contacts */}
      <aside aria-label="Agency Contacts" className="bg-[#0B0F19] text-xs text-slate-300 border-b border-white/10 px-3 sm:px-4 py-1.5 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FACC15] animate-pulse shrink-0"></span>
              <span className="font-medium text-white truncate max-w-[170px] xs:max-w-[220px] sm:max-w-none text-[11px] sm:text-xs">
                {AGENCY_CONFIG.contact.address}
              </span>
            </div>
            <span className="hidden sm:inline text-slate-500">·</span>
            <a 
              href={`tel:${AGENCY_CONFIG.contact.phone}`}
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-[#FACC15] transition-colors font-mono text-xs"
            >
              <span>Tel: {AGENCY_CONFIG.contact.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a 
              href={`mailto:${AGENCY_CONFIG.contact.email}`}
              className="hidden md:inline text-slate-300 hover:text-[#FACC15] transition-colors font-mono text-xs"
            >
              {AGENCY_CONFIG.contact.email}
            </a>
            <button
              onClick={onOpenPlaceholdersModal}
              className="flex items-center gap-1 text-[11px] sm:text-xs text-[#FACC15] hover:text-white transition-colors cursor-pointer py-0.5 px-1.5 rounded bg-white/5 sm:bg-transparent"
              title="View contact configuration"
            >
              <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="underline decoration-dotted">Details</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-lg shadow-black/20'
            : 'bg-[#0B0F19] border-b border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2 sm:gap-2.5 focus:outline-none min-w-0"
            >
              <motion.div 
                whileHover={{ rotate: 12, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FACC15] flex items-center justify-center font-bold text-[#0B0F19] shadow-sm shrink-0"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#0B0F19]" />
              </motion.div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#FACC15] transition-colors truncate">
                  {AGENCY_CONFIG.companyName}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                  Digital Marketing
                </span>
              </div>
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-[#FACC15] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] rounded group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FACC15] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCtaClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] active:bg-[#CA8A04] rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACC15] min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#FACC15]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-[#0B0F19] border-b border-white/10 px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#FACC15] rounded-xl transition-colors min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Direct Mobile Quick Actions Bar */}
                <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={`tel:${AGENCY_CONFIG.contact.phone}`}
                      className="p-2.5 rounded-lg bg-[#141B2D] border border-white/10 text-slate-200 text-center font-mono hover:text-[#FACC15] flex items-center justify-center min-h-[44px]"
                    >
                      Call: {AGENCY_CONFIG.contact.phone}
                    </a>
                    <a
                      href={`mailto:${AGENCY_CONFIG.contact.email}`}
                      className="p-2.5 rounded-lg bg-[#141B2D] border border-white/10 text-slate-200 text-center hover:text-[#FACC15] flex items-center justify-center min-h-[44px]"
                    >
                      Email Us
                    </a>
                  </div>

                  <button
                    onClick={handleCtaClick}
                    className="w-full py-3.5 px-4 text-center text-sm font-semibold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPlaceholdersModal?.();
                    }}
                    className="py-2 text-xs text-slate-400 hover:text-[#FACC15] text-center"
                  >
                    View Agency Contact Config
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
