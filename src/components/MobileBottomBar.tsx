import { Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface MobileBottomBarProps {
  onGetStartedClick?: () => void;
}

export default function MobileBottomBar({ onGetStartedClick }: MobileBottomBarProps) {
  const handleCta = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Mobile Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${AGENCY_CONFIG.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#141B2D] border border-white/10 text-white hover:text-[#FACC15] active:scale-95 transition-all text-xs font-semibold"
          aria-label={`Call agency at ${AGENCY_CONFIG.contact.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
          <span>Call</span>
        </a>

        {/* Direct Email Button */}
        <a
          href={`mailto:${AGENCY_CONFIG.contact.email}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#141B2D] border border-white/10 text-white hover:text-[#FACC15] active:scale-95 transition-all text-xs font-semibold"
          aria-label={`Email agency at ${AGENCY_CONFIG.contact.email}`}
        >
          <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
          <span>Email</span>
        </a>

        {/* Primary Get Started CTA */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={handleCta}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#0B0F19] text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>

      </div>
    </nav>
  );
}
