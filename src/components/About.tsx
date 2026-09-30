import { useState } from 'react';
import { ArrowRight, Compass, Lightbulb, Search, Cpu, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface AboutProps {
  onLearnMoreClick?: () => void;
}

export default function About({ onLearnMoreClick }: AboutProps) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pillars = [
    {
      icon: Compass,
      title: 'Grounded Strategy',
      desc: 'Campaign blueprints mapped directly to your commercial revenue objectives.',
    },
    {
      icon: Lightbulb,
      title: 'Distinctive Creativity',
      desc: 'Memorable brand stories and assets that captivate high-intent buyers.',
    },
    {
      icon: Search,
      title: 'Market Research',
      desc: 'Rigorous analysis of competitor gaps and customer demand patterns.',
    },
    {
      icon: Cpu,
      title: 'Modern Digital Tools',
      desc: 'Advanced marketing tech stack, conversion analytics, and automation loops.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative mx-2 sm:mx-0">
              {/* Yellow decorative accent background box with subtle scale */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 w-full h-full rounded-2xl bg-[#FACC15] -z-10 transition-transform duration-300"
                aria-hidden="true"
              />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B0F19] aspect-[4/3] group">
                {!imageError ? (
                  <img
                    src={AGENCY_CONFIG.images.about}
                    alt="Agency strategists reviewing digital marketing campaign roadmap"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-center">
                    <Compass className="w-12 h-12 text-[#FACC15] mb-2" />
                    <span className="text-white font-bold text-base">Strategic Marketing Collaboration</span>
                  </div>
                )}

                {/* Bottom Overlay Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0B0F19]/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 text-white"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#FACC15] font-semibold">Our Mission</div>
                      <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Empowering Businesses to Dominate Online</div>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FACC15] flex items-center justify-center text-[#0B0F19] font-bold text-xs shrink-0">
                      ✓
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: About Us Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-5 sm:space-y-6"
          >
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CA8A04] bg-[#FACC15]/15 px-3 py-1 rounded-md inline-block">
                About Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0F19] tracking-tight">
                Architecting Modern Growth for Visionary Companies
              </h2>
            </div>

            {/* Core flyer copy verbatim */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We provide digital marketing solutions designed to help businesses establish a strong online presence and connect with their target customers. Our approach combines strategy, creativity, market research, and modern digital tools to help businesses grow.
            </p>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Whether you are launching a new enterprise or scaling an existing operation, our cross-functional team delivers end-to-end guidance. We eliminate superficial vanity metrics and focus squarely on sustainable revenue, audience acquisition, and commercial brand equity.
            </p>

            {/* 4 Pillars Grid with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div 
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#FACC15] transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#0B0F19] text-[#FACC15] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#0B0F19]">{pillar.title}</h3>
                        <p className="text-xs text-slate-600 mt-1 leading-snug">{pillar.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Expandable Extended Details with AnimatePresence */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 rounded-xl bg-[#0B0F19] text-white border border-[#FACC15]/20 space-y-3">
                    <h4 className="text-sm font-bold text-[#FACC15] uppercase tracking-wider">
                      Our Methodological Promise
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      We don't believe in one-size-fits-all playbooks. Every marketing engagement begins with forensic analysis of your product-market fit, followed by rapid multi-channel testing, agile iterations, and transparent weekly reporting.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-200">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FACC15]" />
                        <span>Transparent Attribution</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FACC15]" />
                        <span>No Long-Term Lock-Ins</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FACC15]" />
                        <span>Dedicated Strategist</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FACC15]" />
                        <span>Weekly Performance Review</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Row */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => {
                  setIsExpanded(!isExpanded);
                  onLearnMoreClick?.();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] transition-colors cursor-pointer shadow-sm"
              >
                <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
