import { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface GrowthCalculatorProps {
  onApplyEstimateToContact?: (summary: string, recommendedService: string) => void;
}

export default function GrowthCalculator({ onApplyEstimateToContact }: GrowthCalculatorProps) {
  const [industry, setIndustry] = useState('b2b');
  const [currentTraffic, setCurrentTraffic] = useState(5000);
  const [growthGoal, setGrowthGoal] = useState<'moderate' | 'aggressive' | 'hyper'>('aggressive');

  // Multiplier logic
  const getMultiplier = () => {
    switch (growthGoal) {
      case 'moderate': return 1.8;
      case 'aggressive': return 2.6;
      case 'hyper': return 4.2;
    }
  };

  const projectedTraffic = Math.round(currentTraffic * getMultiplier());
  const estimatedConversionRate = industry === 'b2b' ? 0.025 : industry === 'ecommerce' ? 0.032 : 0.04;
  const projectedLeads = Math.round(projectedTraffic * estimatedConversionRate);

  const getRecommendedService = () => {
    if (growthGoal === 'hyper') return 'Marketing Strategy & Full-Funnel Digital Advertising';
    if (industry === 'ecommerce') return 'Digital Advertising & Website Marketing';
    if (industry === 'b2b') return 'Market Analysis & Inbound Content Marketing';
    return 'Search Engine Optimization (SEO) & Business Concept';
  };

  const handleApply = () => {
    const summary = `Goal: ${growthGoal.toUpperCase()} Growth in ${industry.toUpperCase()} (Target: ${projectedTraffic.toLocaleString()} visits/mo, ~${projectedLeads} leads/mo)`;
    const service = getRecommendedService();
    if (onApplyEstimateToContact) {
      onApplyEstimateToContact(summary, service);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#0B0F19] text-white p-4 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          
          {/* Subtle Animated Accent Glow */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-80 h-80 bg-[#FACC15] rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Growth Planner</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                  Estimate Your Digital Growth Potential
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Select your sector and target pace to project quarterly traffic and inbound acquisition metrics.
                </p>
              </div>

              {/* Sector Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Business Model
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: 'b2b', label: 'B2B & Services' },
                    { id: 'ecommerce', label: 'E-Commerce' },
                    { id: 'local', label: 'Local Business' },
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setIndustry(item.id)}
                      className={`px-1.5 sm:px-3 py-2.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center ${
                        industry === item.id
                          ? 'bg-[#FACC15] text-[#0B0F19]'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Slider for Current Monthly Traffic */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold uppercase tracking-wider text-slate-300">Current Monthly Visitors</span>
                  <span className="font-mono text-[#FACC15] font-bold tabular-nums">
                    {currentTraffic.toLocaleString()} visits
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={currentTraffic}
                  onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FACC15]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>500</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* Growth Pace */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Target Trajectory
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: 'moderate', label: 'Moderate (+80%)' },
                    { id: 'aggressive', label: 'Aggressive (+160%)' },
                    { id: 'hyper', label: 'Hyper-Scale (+320%)' },
                  ].map((pace) => (
                    <motion.button
                      key={pace.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setGrowthGoal(pace.id as any)}
                      className={`px-1 sm:px-3 py-2.5 text-[10px] sm:text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center min-h-[40px] flex items-center justify-center leading-tight ${
                        growthGoal === pace.id
                          ? 'bg-[#FACC15] text-[#0B0F19]'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {pace.label}
                    </motion.button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Projected Output Card */}
            <div className="lg:col-span-6 bg-[#141B2D] border border-[#FACC15]/30 rounded-xl p-4 sm:p-7 shadow-lg space-y-5 sm:space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-slate-400">Quarterly Target Projection</div>
                  <div className="text-base font-bold text-white">Estimated Growth Impact</div>
                </div>
                <div className="px-2.5 py-1 bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold rounded flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Active Model</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#0B0F19] border border-white/5">
                  <div className="text-xs text-slate-400">Projected Monthly Visitors</div>
                  <motion.div 
                    key={projectedTraffic}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl sm:text-3xl font-extrabold text-[#FACC15] tabular-nums mt-1"
                  >
                    {projectedTraffic.toLocaleString()}
                  </motion.div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    +{Math.round((getMultiplier() - 1) * 100)}% traffic uplift
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0B0F19] border border-white/5">
                  <div className="text-xs text-slate-400">Projected Qualified Leads</div>
                  <motion.div 
                    key={projectedLeads}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums mt-1"
                  >
                    ~{projectedLeads.toLocaleString()}
                  </motion.div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Monthly conversion target
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/30 border border-white/5 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-[#FACC15]">Recommended Strategy Core:</div>
                <div>{getRecommendedService()}</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleApply}
                className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Growth Plan For These Numbers</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
