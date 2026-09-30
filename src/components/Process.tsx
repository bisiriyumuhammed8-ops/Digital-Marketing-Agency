import { useState } from 'react';
import { CheckCircle2, ChevronRight, FileCheck, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS, ProcessStep } from '../data/agencyData';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-28 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Animated Subtle Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FACC15] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step Growth Methodology
          </h2>

          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            A battle-tested framework taking you from initial discovery to sustained digital dominance.
          </p>
        </motion.div>

        {/* Desktop Connected Step Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((stepItem: ProcessStep, index: number) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(index)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141B2D] border-[#FACC15] shadow-xl shadow-[#FACC15]/10'
                    : 'bg-[#111726] border-white/10 hover:border-white/20 hover:bg-[#141B2D]'
                }`}
              >
                <div>
                  {/* Step Number with Yellow Accent */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black tabular-nums transition-colors ${
                      isSelected ? 'text-[#FACC15]' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {stepItem.number}
                    </span>

                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                      isSelected ? 'bg-[#FACC15] text-[#0B0F19]' : 'bg-white/5 text-slate-400'
                    }`}>
                      Phase {stepItem.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                    {stepItem.title}
                  </h3>

                  {/* Short Description from flyer */}
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                    {stepItem.shortDesc}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stepItem.details}
                  </p>
                </div>

                {/* Key Deliverable */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-300">
                  <FileCheck className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                  <span className="truncate">{stepItem.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Spotlight Banner with AnimatePresence */}
        <motion.div 
          layout
          className="mt-10 rounded-2xl bg-[#141B2D] border border-white/10 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-start sm:items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FACC15] text-[#0B0F19] font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                {PROCESS_STEPS[activeStep].number}
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#FACC15] font-semibold">
                  Active Step Focus
                </div>
                <h4 className="text-lg font-bold text-white">
                  {PROCESS_STEPS[activeStep].title} — {PROCESS_STEPS[activeStep].shortDesc}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Key Outcome: {PROCESS_STEPS[activeStep].deliverable}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded-lg bg-[#FACC15] text-[#0B0F19] text-xs font-bold hover:bg-[#EAB308] transition-colors cursor-pointer"
            >
              Next Phase
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
