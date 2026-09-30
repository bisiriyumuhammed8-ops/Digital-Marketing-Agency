import { useState } from 'react';
import { ArrowRight, BarChart2, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onGetStartedClick?: () => void;
  onExploreServicesClick?: () => void;
}

export default function Hero({ onGetStartedClick, onExploreServicesClick }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  const scrollToServices = () => {
    if (onExploreServicesClick) {
      onExploreServicesClick();
    } else {
      const el = document.querySelector('#services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-[#0B0F19] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Animated Ambient Yellow Glow Accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#FACC15] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-20 left-10 w-80 h-80 bg-[#EAB308] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Editorial Kicker */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 border border-[#FACC15]/20 px-3.5 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-ping"></span>
              <span>Growth-Focused Digital Agency</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-2xl">
              Digital Marketing That{' '}
              <span className="relative inline-block text-[#FACC15]">
                Grows
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1.5 left-0 h-2.5 bg-[#FACC15]/20 -z-10 rounded"
                />
              </span>{' '}
              Your Business
            </h1>

            {/* Supporting Text from Flyer Brief */}
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              We help businesses build a powerful online presence, reach the right audience, and turn digital marketing into measurable growth.
            </p>

            {/* Core Capability Checklist from flyer values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 sm:pt-2 text-xs sm:text-sm text-slate-200">
              {[
                "Clear Business Concept Development",
                "Deep Market & Audience Research",
                "Actionable Growth Strategies",
                "Data-Driven Campaign Execution"
              ].map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] active:bg-[#CA8A04] rounded-xl shadow-lg shadow-[#FACC15]/20 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Our Services</span>
              </motion.button>
            </div>

            {/* Proof Metric Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pt-5 sm:pt-6 border-t border-slate-800/80 w-full grid grid-cols-3 gap-2 sm:gap-4 text-left"
            >
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white tabular-nums">98%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 leading-tight">Strategy Execution Rate</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-[#FACC15] tabular-nums">3.8x</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 leading-tight">Average Growth Lift</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white tabular-nums">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 leading-tight">Custom Roadmaps</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Feature Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card border with yellow accent corner */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-[#FACC15]/40 via-white/10 to-transparent shadow-2xl">
                <div className="relative rounded-[15px] overflow-hidden bg-[#141B2D] border border-white/10 aspect-video sm:aspect-[4/3] lg:aspect-[4/3.5] group">
                  
                  {!imageError ? (
                    <img
                      src={AGENCY_CONFIG.images.hero}
                      alt="Modern Digital Marketing Agency Strategy Studio"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    /* Fallback stylized CSS container if image fails */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 p-8 text-center">
                      <BarChart2 className="w-16 h-16 text-[#FACC15] mb-3" />
                      <div className="font-heading text-lg font-bold text-white">Digital Marketing Strategy</div>
                      <div className="text-xs text-slate-400 mt-1 max-w-xs">Data-driven performance campaigns and market research solutions</div>
                    </div>
                  )}

                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent pointer-events-none"></div>

                  {/* Floating Analytics Card with gentle floating animation */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0B0F19]/90 backdrop-blur-md border border-white/15 p-2.5 sm:p-3.5 rounded-xl shadow-xl flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#0B0F19] shrink-0">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-xs text-slate-400 truncate">Marketing Impact</div>
                        <div className="text-xs sm:text-sm font-bold text-white truncate">Measurable Growth</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] sm:text-xs font-semibold text-[#FACC15] uppercase tracking-wider bg-[#FACC15]/10 px-2 py-0.5 rounded">
                        Active
                      </span>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Floating Badge on Top Corner with gentle offset float */}
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:flex absolute -top-4 -right-4 bg-[#141B2D] border border-[#FACC15]/40 text-white px-4 py-2.5 rounded-xl shadow-xl items-center gap-2.5"
              >
                <Users className="w-4 h-4 text-[#FACC15]" />
                <span className="text-xs font-medium">Audience-Centric Campaigns</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
