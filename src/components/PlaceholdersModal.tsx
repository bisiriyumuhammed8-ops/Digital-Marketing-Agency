import { useState } from 'react';
import { X, Copy, Check, Info, FileCode, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface PlaceholdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlaceholdersModal({ isOpen, onClose }: PlaceholdersModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const placeholders = [
    { label: 'Company Phone', value: AGENCY_CONFIG.contact.phone, key: 'phone', note: 'Verified Live Line' },
    { label: 'WhatsApp Enquiry', value: AGENCY_CONFIG.contact.whatsapp, key: 'whatsapp', note: 'Verified WhatsApp' },
    { label: 'Company Email', value: AGENCY_CONFIG.contact.email, key: 'email', note: 'Verified Official' },
    { label: 'Office Address', value: AGENCY_CONFIG.contact.address, key: 'address', note: 'Verified Location' },
    { label: 'Company Website', value: AGENCY_CONFIG.contact.website, key: 'website', note: 'Verified Domain' },
    { label: 'Company Name', value: AGENCY_CONFIG.companyName, key: 'name', note: 'Flyer Brand Name' },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="placeholders-modal-title"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#0B0F19] border border-[#FACC15]/40 rounded-2xl p-5 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
          >
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#0B0F19]">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="placeholders-modal-title" className="text-xl font-bold text-white">
                    Flyer Placeholder Data Guide
                  </h3>
                  <p className="text-xs text-slate-400">
                    All unprovided company information is tagged with placeholders
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141B2D] border border-white/10 text-xs text-slate-300 leading-relaxed">
                Per instructions, we avoid inventing fictitious company names, phone numbers, or addresses. The items below are currently rendered throughout the website and can be replaced in <span className="font-mono text-[#FACC15]">src/data/agencyData.ts</span>.
              </div>

              <div className="space-y-2.5">
                {placeholders.map((item) => (
                  <motion.div 
                    key={item.key}
                    whileHover={{ x: 2 }}
                    className="p-3 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase text-[#FACC15]">{item.label}</span>
                        <span className="text-[9px] text-slate-400">({item.note})</span>
                      </div>
                      <div className="text-sm font-semibold text-white font-mono mt-0.5">
                        {item.value}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.value, item.key)}
                      className="p-2 text-slate-400 hover:text-[#FACC15] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                      title="Copy value"
                    >
                      {copiedKey === item.key ? (
                        <Check className="w-4 h-4 text-[#FACC15]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <FileCode className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>Configured in: <code className="text-slate-200">src/data/agencyData.ts</code></span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] rounded-lg transition-colors cursor-pointer"
                >
                  Understood
                </motion.button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
