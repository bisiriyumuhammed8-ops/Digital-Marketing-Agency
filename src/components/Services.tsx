import { useState } from 'react';
import { 
  Briefcase, 
  BarChart3, 
  Target, 
  Share2, 
  FileText, 
  Search, 
  Megaphone, 
  Compass, 
  Layout, 
  ArrowRight, 
  Check, 
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MAIN_SERVICES, ADDITIONAL_SERVICES, ServiceItem, AGENCY_CONFIG } from '../data/agencyData';

interface ServicesProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForContact }: ServicesProps) {
  const [filter, setFilter] = useState<'all' | 'main' | 'digital' | 'brand'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#FACC15]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#FACC15]" />;
      case 'Target': return <Target className="w-6 h-6 text-[#FACC15]" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-[#FACC15]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#FACC15]" />;
      case 'Search': return <Search className="w-6 h-6 text-[#FACC15]" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-[#FACC15]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#FACC15]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#FACC15]" />;
      default: return <Sparkles className="w-6 h-6 text-[#FACC15]" />;
    }
  };

  const allServices = [...MAIN_SERVICES, ...ADDITIONAL_SERVICES];

  const filteredServices = allServices.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'main') return service.isMainFromFlyer;
    if (filter === 'digital') return service.category === 'digital';
    if (filter === 'brand') return service.category === 'brand';
    return true;
  });

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(null);
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 agency-dark-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              <span className="w-2 h-2 rounded-full bg-[#FACC15]"></span>
              <span>Our Capabilities & Services</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Transforming Ideas into Market Leadership
            </h2>
            <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
              From the three core foundations featured in our agency flyer to our specialized digital performance wings, our solutions deliver measurable business impact.
            </p>
          </div>

          {/* Interactive Filter Control with mobile horizontal scroll support */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#141B2D] border border-white/10 rounded-xl overflow-x-auto no-scrollbar max-w-full">
            {[
              { id: 'all', label: `All Services (${allServices.length})` },
              { id: 'main', label: 'Core (Flyer Top 3)' },
              { id: 'digital', label: 'Digital & Search' },
              { id: 'brand', label: 'Brand & Content' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`relative px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer shrink-0 whitespace-nowrap min-h-[36px] flex items-center justify-center ${
                  filter === tab.id
                    ? 'text-[#0B0F19] font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {filter === tab.id && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 bg-[#FACC15] rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Banner Card: Spotlight on Core Strategy & Analytics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 rounded-2xl bg-gradient-to-r from-[#141B2D] via-[#1a233a] to-[#141B2D] border border-[#FACC15]/30 p-6 sm:p-8 overflow-hidden relative shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Strategic Foundation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                The 3 Core Pillars From Our Agency Flyer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Business Concept, Market Analysis, and Marketing Strategy form the triad of any resilient enterprise. We unify all three into a singular cohesive growth engine.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setFilter('main')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FACC15] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Filter flyer core services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-white/10 aspect-video lg:aspect-[4/3] group">
              <img
                src={AGENCY_CONFIG.images.services}
                alt="Digital performance analytics screen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-2.5 left-3 text-xs text-[#FACC15] font-semibold">
                Quantified Market Research
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Bento Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-colors ${
                  service.isMainFromFlyer
                    ? 'bg-[#141B2D] border-[#FACC15]/40 hover:border-[#FACC15] shadow-lg shadow-black/30'
                    : 'bg-[#111726] border-white/10 hover:border-[#FACC15]/60 hover:bg-[#141B2D]'
                }`}
              >
                {/* Highlight Tag for Flyer Main Services */}
                {service.isMainFromFlyer && (
                  <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider text-[#0B0F19] bg-[#FACC15] px-2 py-0.5 rounded shadow-sm">
                    Flyer Core
                  </div>
                )}

                <div>
                  {/* Icon Container with hover spin */}
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#FACC15]/40 transition-colors"
                  >
                    {getIcon(service.iconName)}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Scope & Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FACC15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Inquire
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Service Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-[#0B0F19] border border-[#FACC15]/40 rounded-2xl p-5 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#141B2D] border border-[#FACC15]/30 flex items-center justify-center">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <div>
                    {selectedService.isMainFromFlyer && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-2 py-0.5 rounded">
                        Featured In Flyer
                      </span>
                    )}
                    <h3 id="service-modal-title" className="text-2xl font-bold text-white mt-0.5">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedService.fullDetails}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15] mb-2.5">
                    Key Milestones & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedService.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-[#141B2D] border border-white/5 text-slate-200">
                        <Check className="w-4 h-4 text-[#FACC15] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Customized for your industry & timeline
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => handleInquire(selectedService.title)}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Inquire For {selectedService.title}
                  </motion.button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
