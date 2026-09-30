import { Sparkles, Mail, Phone, MapPin, Globe, ArrowUp, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { AGENCY_CONFIG, ALL_SERVICES } from '../data/agencyData';

interface FooterProps {
  onOpenPlaceholdersModal?: () => void;
}

export default function Footer({ onOpenPlaceholdersModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F19] text-white border-t border-white/10 pt-12 sm:pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FACC15] flex items-center justify-center font-bold text-[#0B0F19]">
                <Sparkles className="w-4 h-4 fill-current text-[#0B0F19]" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                {AGENCY_CONFIG.companyName}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We help businesses build a powerful online presence, reach the right audience, and turn digital marketing into measurable growth. Inspired by the agency flyer design principles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#141B2D] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FACC15] hover:border-[#FACC15]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-[#141B2D] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FACC15] hover:border-[#FACC15]/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#141B2D] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FACC15] hover:border-[#FACC15]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-[#141B2D] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FACC15] hover:border-[#FACC15]/40 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-[#FACC15] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Business Concept</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Marketing Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO & Search Performance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Advertising</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Marketing</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                Contact Info
              </h4>
              <button
                onClick={onOpenPlaceholdersModal}
                className="text-[10px] text-slate-400 hover:text-[#FACC15] underline cursor-pointer"
              >
                Config Details
              </button>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${AGENCY_CONFIG.contact.phone}`} className="font-mono hover:text-[#FACC15] transition-colors">
                    {AGENCY_CONFIG.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${AGENCY_CONFIG.contact.email}`} className="font-mono hover:text-[#FACC15] transition-colors">
                    {AGENCY_CONFIG.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <span>{AGENCY_CONFIG.contact.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <a 
                    href={`https://${AGENCY_CONFIG.contact.website.replace(/^https?:\/\//, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono hover:text-[#FACC15] transition-colors"
                  >
                    {AGENCY_CONFIG.contact.website}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {AGENCY_CONFIG.companyName}. Built from Agency Flyer Design Brief. All placeholder items clearly documented.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#FACC15] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
