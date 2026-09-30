import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CTASectionProps {
  onContactClick?: () => void;
}

export default function CTASection({ onContactClick }: CTASectionProps) {
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0B0F19] via-[#141B2D] to-[#0B0F19] text-white relative overflow-hidden border-y border-white/10">
      {/* Decorative Yellow Gradient Wave */}
      <div 
        className="absolute inset-0 agency-dark-grid opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.16, 0.08]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FACC15] rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6"
      >
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 border border-[#FACC15]/20 px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Take The Next Step</span>
        </div>

        {/* Verbatim Headline from Flyer Brief */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Grow Your Business Online?
        </h2>

        {/* Verbatim Text from Flyer Brief */}
        <p className="text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let's create a digital marketing strategy that puts your business in front of the right audience.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleClick}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] active:bg-[#CA8A04] rounded-xl shadow-xl shadow-[#FACC15]/20 transition-colors cursor-pointer flex items-center justify-center gap-2.5 group min-h-[48px]"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
}
