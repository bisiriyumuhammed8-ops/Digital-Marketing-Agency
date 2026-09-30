import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly variable increment for an authentic loading sensation
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = 'unset';
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
    document.body.style.overflow = 'unset';
  };

  const getStatusText = (val: number) => {
    if (val < 25) return 'Calibrating Brand Strategy...';
    if (val < 50) return 'Analyzing Target Audience & Markets...';
    if (val < 75) return 'Architecting Growth Funnels...';
    if (val < 95) return 'Optimizing Campaign Engine...';
    return 'Ready to Grow Your Business';
  };

  return (
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -25,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0F19] text-white px-6 select-none"
        >
          {/* Ambient Golden Glows */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-96 h-96 bg-[#FACC15] rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Skip Button Top Right */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute top-6 right-6 text-xs uppercase tracking-wider text-slate-400 hover:text-[#FACC15] transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Center Brand & Progress Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full space-y-7">
            
            {/* Logo Emblem with Pulse & Rotation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FACC15] flex items-center justify-center shadow-xl shadow-[#FACC15]/20">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#0B0F19] fill-current" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-2xl border-2 border-[#FACC15] pointer-events-none"
              />
            </motion.div>

            {/* Typography */}
            <div className="space-y-1.5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#FACC15] bg-[#FACC15]/10 px-3 py-1 rounded-full border border-[#FACC15]/20"
              >
                <span>Digital Marketing That Grows Your Business</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-heading"
              >
                {AGENCY_CONFIG.companyName}
              </motion.h1>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 text-[11px] truncate max-w-[210px] sm:max-w-none">
                  {getStatusText(progress)}
                </span>
                <span className="font-bold text-[#FACC15] tabular-nums">
                  {progress}%
                </span>
              </div>

              {/* Bar Track */}
              <div 
                className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#CA8A04] via-[#FACC15] to-[#FDE047] rounded-full shadow-sm"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>

            {/* Subtle Agency Flyer Tagline */}
            <p className="text-[11px] text-slate-500 max-w-xs">
              Business Concept · Market Analysis · Marketing Strategy
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
