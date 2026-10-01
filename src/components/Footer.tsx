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
                    Tel: {AGENCY_CONFIG.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0 mt-0.5 text-[#25D366]">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div>
                  <a 
                    href={AGENCY_CONFIG.contact.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[#25D366] hover:underline transition-colors"
                  >
                    WhatsApp: {AGENCY_CONFIG.contact.whatsapp}
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
