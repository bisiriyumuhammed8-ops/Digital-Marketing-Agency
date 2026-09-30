import { 
  Compass, 
  Sparkles, 
  Crosshair, 
  TrendingUp, 
  ShieldCheck, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US, BenefitCard } from '../data/agencyData';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#0B0F19]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#0B0F19]" />;
      case 'Crosshair': return <Crosshair className="w-6 h-6 text-[#0B0F19]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#0B0F19]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0B0F19]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#0B0F19]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#0B0F19]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CA8A04] bg-[#FACC15]/20 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CA8A04]"></span>
            <span>Why Partner With Us</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-tight">
            Engineered For Measurable Competitive Advantage
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            We operate as an embedded growth partner. Our cross-disciplinary discipline merges analytical rigor with bespoke creative execution.
          </p>
        </motion.div>

        {/* Benefits Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((card: BenefitCard, index: number) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#FACC15] transition-all duration-200 flex flex-col justify-between"
            >
              {/* Top Accent Strip on Hover */}
              <div 
                className="absolute top-0 left-6 right-6 h-1 bg-[#FACC15] rounded-t opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />

              <div>
                {/* Icon with Yellow Accent Background */}
                <motion.div 
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-12 h-12 rounded-xl bg-[#FACC15] flex items-center justify-center mb-5 transition-transform shadow-sm"
                >
                  {getIcon(card.iconName)}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B0F19] mb-2.5 group-hover:text-[#CA8A04] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              {/* Bottom Micro-Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
                <span>{card.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl bg-[#0B0F19] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Looking for a custom marketing deployment?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We structure engagements around your immediate growth bottlenecks and quarterly goals.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl transition-colors whitespace-nowrap shadow"
          >
            Discuss Your Objectives
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
