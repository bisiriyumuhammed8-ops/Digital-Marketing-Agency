import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_CONFIG, ALL_SERVICES } from '../data/agencyData';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceInterestedIn: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ContactSectionProps {
  prefilledService?: string;
  prefilledMessage?: string;
  onOpenPlaceholdersModal?: () => void;
}

export default function ContactSection({ 
  prefilledService, 
  prefilledMessage,
  onOpenPlaceholdersModal 
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceInterestedIn: 'Marketing Strategy',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceInterestedIn: prefilledService }));
    }
    if (prefilledMessage) {
      setFormData((prev) => ({ 
        ...prev, 
        message: prev.message ? `${prev.message}\n\n[Project Scope]: ${prefilledMessage}` : `[Project Scope]: ${prefilledMessage}` 
      }));
    }
  }, [prefilledService, prefilledMessage]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(AGENCY_CONFIG.formspreeEndpoint || "https://formspree.io/f/mljdvajw", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName || "Not provided",
          service: formData.serviceInterestedIn,
          message: formData.message,
          _subject: `New Lead: ${formData.fullName} (${formData.serviceInterestedIn})`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setSubmitError(data.errors.map((err: { message: string }) => err.message).join(", "));
        } else {
          setSubmitError("Failed to submit message to Formspree. You can also reach out directly to bisiriyumuhammed8@gmail.com.");
        }
      }
    } catch (err) {
      setSubmitError("Network error connecting to Formspree. Please check your internet connection or email us directly at bisiriyumuhammed8@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPlaceholder = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceInterestedIn: 'Marketing Strategy',
      message: '',
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CA8A04] bg-[#FACC15]/20 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CA8A04]"></span>
            <span>Get In Touch</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0F19] tracking-tight">
            Start Your Growth Engagement
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto">
            Reach out to our strategic team to discuss your business concept, commission a market analysis, or execute a high-converting digital marketing campaign.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Agency Flyer Placeholders & Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Info Card with prominent yellow accent */}
            <div className="bg-[#0B0F19] text-white rounded-2xl p-4 sm:p-7 border border-slate-800 shadow-xl space-y-5 sm:space-y-6">
              
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                    Contact Information
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#FACC15] bg-[#FACC15]/10 px-2 py-0.5 rounded-full font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse"></span>
                    <span>Direct Lines Active</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Let's Discuss Your Growth</h3>
                <p className="text-xs text-slate-300">
                  Connect directly with our strategy directors via email, telephone, or visit our office in Lekki.
                </p>
              </div>

              {/* Verified Contact Details List */}
              <div className="space-y-3">
                
                {/* Phone Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#141B2D] border border-white/10 flex items-center justify-between group hover:border-[#FACC15]/40 transition-colors"
                >
                  <a 
                    href={`tel:${AGENCY_CONFIG.contact.phone}`}
                    className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0 focus:outline-none"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#0B0F19] shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Direct Phone</span>
                        <span className="text-[9px] font-bold text-[#0B0F19] bg-[#FACC15] px-1 rounded">Active</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono hover:text-[#FACC15] transition-colors truncate">
                        {AGENCY_CONFIG.contact.phone}
                      </div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPlaceholder(AGENCY_CONFIG.contact.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#FACC15]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>

                {/* WhatsApp Enquiry Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#141B2D] border border-[#25D366]/40 flex items-center justify-between group hover:border-[#25D366] transition-colors"
                >
                  <a 
                    href={AGENCY_CONFIG.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0 focus:outline-none"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm shadow-[#25D366]/20">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-[#25D366]">WhatsApp Enquiry</span>
                        <span className="text-[9px] font-bold text-white bg-[#25D366] px-1 rounded">Fastest</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono hover:text-[#25D366] transition-colors truncate">
                        {AGENCY_CONFIG.contact.whatsapp}
                      </div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPlaceholder(AGENCY_CONFIG.contact.whatsapp, 'whatsapp')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Copy WhatsApp number"
                    aria-label="Copy WhatsApp number"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>

                {/* Email Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#141B2D] border border-white/10 flex items-center justify-between group hover:border-[#FACC15]/40 transition-colors"
                >
                  <a 
                    href={`mailto:${AGENCY_CONFIG.contact.email}`}
                    className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0 focus:outline-none"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#0B0F19] shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Official Email</span>
                        <span className="text-[9px] font-bold text-[#0B0F19] bg-[#FACC15] px-1 rounded">Active</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono hover:text-[#FACC15] transition-colors truncate">
                        {AGENCY_CONFIG.contact.email}
                      </div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPlaceholder(AGENCY_CONFIG.contact.email, 'email')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-[#FACC15]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>

                {/* Office Location Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#141B2D] border border-white/10 flex items-center justify-between group hover:border-[#FACC15]/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#0B0F19] shrink-0 group-hover:scale-105 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Office Location</span>
                        <span className="text-[9px] font-bold text-[#FACC15] bg-[#FACC15]/10 px-1 rounded">Lagos</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white truncate">
                        {AGENCY_CONFIG.contact.address}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyPlaceholder(AGENCY_CONFIG.contact.address, 'address')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Copy office address"
                    aria-label="Copy office address"
                  >
                    {copiedField === 'address' ? <Check className="w-4 h-4 text-[#FACC15]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>

                {/* Website Item */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#141B2D] border border-white/10 flex items-center justify-between group hover:border-[#FACC15]/40 transition-colors"
                >
                  <a 
                    href={`https://${AGENCY_CONFIG.contact.website.replace(/^https?:\/\//, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0 focus:outline-none"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#0B0F19] shrink-0 group-hover:scale-105 transition-transform">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Official Domain</span>
                        <span className="text-[9px] font-bold text-[#0B0F19] bg-[#FACC15] px-1 rounded">Active</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono hover:text-[#FACC15] transition-colors truncate">
                        {AGENCY_CONFIG.contact.website}
                      </div>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyPlaceholder(AGENCY_CONFIG.contact.website, 'website')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Copy website URL"
                    aria-label="Copy website URL"
                  >
                    {copiedField === 'website' ? <Check className="w-4 h-4 text-[#FACC15]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>

              </div>

              {/* Service Level Agreement */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Response guaranteed within 24 business hours</span>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl p-4 sm:p-7 md:p-9 border border-slate-200 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success State */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-10 text-center space-y-5"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-[#FACC15]/20 text-[#0B0F19] flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-9 h-9 text-[#CA8A04]" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B0F19]">
                        Message Sent & Delivered to Email!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your inquiry has been forwarded directly to our inbox via Formspree. Our team will review your requirements for <span className="font-semibold text-slate-900">{formData.serviceInterestedIn}</span> and follow up via <span className="font-semibold text-slate-900">{formData.email}</span> within 24 hours.
                      </p>
                    </div>

                    {/* Summary Box */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5">
                      <div className="font-bold text-slate-900 pb-1 border-b border-slate-200 flex items-center justify-between">
                        <span>Formspree Delivery Summary</span>
                        <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Delivered</span>
                      </div>
                      <div><span className="font-medium text-slate-500">Service:</span> {formData.serviceInterestedIn}</div>
                      {formData.companyName && <div><span className="font-medium text-slate-500">Company:</span> {formData.companyName}</div>}
                      <div><span className="font-medium text-slate-500">Phone:</span> {formData.phone}</div>
                      <div><span className="font-medium text-slate-500">Email:</span> {formData.email}</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl transition-colors cursor-pointer min-h-[44px]"
                    >
                      Send Another Inquiry
                    </motion.button>
                  </motion.div>
                ) : (
                  /* Standard Contact Form */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    noValidate 
                    className="space-y-4 sm:space-y-5"
                  >
                    
                    <div className="border-b border-slate-100 pb-3 sm:pb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B0F19]">
                        Send Us A Message
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Complete this form to request a strategy consultation or service estimate.
                      </p>
                    </div>

                    {/* Inline Formspree Error Alert */}
                    {submitError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <div className="font-semibold">{submitError}</div>
                          <div>
                            You can also email us directly at{' '}
                            <a href={`mailto:${AGENCY_CONFIG.contact.email}`} className="font-bold underline text-red-900">
                              {AGENCY_CONFIG.contact.email}
                            </a>{' '}
                            or call{' '}
                            <a href={`tel:${AGENCY_CONFIG.contact.phone}`} className="font-bold underline text-red-900">
                              {AGENCY_CONFIG.contact.phone}
                            </a>.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex justify-between">
                          <span>Full Name <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="name"
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15] transition-all ${
                            errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#FACC15]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex justify-between">
                          <span>Email Address <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="sarah@yourcompany.com"
                          className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15] transition-all ${
                            errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#FACC15]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      
                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex justify-between">
                          <span>Phone Number <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="e.g. 07078187296"
                          className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15] transition-all ${
                            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#FACC15]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Company / Business Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                          <span>Company / Business Name</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="organization"
                          autoComplete="organization"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Acme Innovations"
                          className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-[#FACC15] transition-all"
                        />
                      </div>

                    </div>

                    {/* Service Interested In */}
                    <div className="space-y-1.5">
                      <label htmlFor="serviceInterestedIn" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                        <span>Service Interested In</span>
                      </label>
                      <select
                        id="serviceInterestedIn"
                        value={formData.serviceInterestedIn}
                        onChange={(e) => setFormData({ ...formData, serviceInterestedIn: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-[#FACC15] transition-all"
                      >
                        <optgroup label="Flyer Core Services">
                          <option value="Business Concept">Business Concept (Flyer Core)</option>
                          <option value="Market Analysis">Market Analysis (Flyer Core)</option>
                          <option value="Marketing Strategy">Marketing Strategy (Flyer Core)</option>
                        </optgroup>
                        <optgroup label="Digital & Growth Services">
                          {ALL_SERVICES.filter(s => !s.isMainFromFlyer).map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </optgroup>
                        <option value="Comprehensive Agency Retainer">Full Agency Retainer / Custom</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex justify-between">
                        <span>Message & Project Goals <span className="text-red-500">*</span></span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell us about your business, current marketing challenges, and what you aim to achieve..."
                        className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15] transition-all resize-none ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#FACC15]'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 sm:py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#0B0F19] bg-[#FACC15] hover:bg-[#EAB308] active:bg-[#CA8A04] rounded-xl shadow-lg shadow-[#FACC15]/20 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#0B0F19] border-t-transparent rounded-full animate-spin"></span>
                            <span>Dispatching Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                      Connected to Formspree (<code className="text-slate-700 font-mono">mljdvajw</code>). Submissions deliver directly to our email.
                    </p>

                    {/* Instant WhatsApp Quick Alternative */}
                    <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <span className="text-slate-500 text-center sm:text-left">
                        Prefer instant messaging for enquiry?
                      </span>
                      <a
                        href={AGENCY_CONFIG.contact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#0F5132] font-bold transition-colors cursor-pointer"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        <span>Chat on WhatsApp: {AGENCY_CONFIG.contact.whatsapp}</span>
                      </a>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
