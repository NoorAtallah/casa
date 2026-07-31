'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Building2, Mail, Phone, Layers, MessageSquare, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const serviceOptions = [
  'Legal Advisory',
  'Business & Financial Advisory',
  'Spanish Language Programmes',
  'Partnership Opportunities',
  'Other',
];

const RECIPIENT = 'info@casadiconsiglio.com';

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name';
    if (!form.email.trim()) next.email = 'Please enter your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address';
    if (!form.service) next.service = 'Please select a service';
    if (!form.message.trim()) next.message = 'Please tell us how we can help';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = `Enquiry: ${form.service} — ${form.fullName}`;
    const body = [
      `Full Name: ${form.fullName}`,
      `Company Name: ${form.companyName || '—'}`,
      `Email Address: ${form.email}`,
      `Phone Number: ${form.phone || '—'}`,
      `Service of Interest: ${form.service}`,
      '',
      'Message:',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const inputBase =
    'w-full px-5 py-4 rounded-xl bg-white text-black placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#bda985]';

  const fieldStyle = (hasError) => ({
    border: hasError ? '2px solid #dc2626' : '2px solid rgba(189,169,133,0.25)',
  });

  return (
    <section id="contact-form" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            linear-gradient(45deg, rgba(189,169,133,0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(189,169,133,0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(189,169,133,0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(189,169,133,0.05) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — heading + image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#bda985] shadow-lg mb-6"
            >
              Start a Conversation
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-4xl font-black text-black leading-tight mb-6"
            >
              Tell Us How We Can{' '}
              <span style={{ color: '#bda985' }}>Support You</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg text-gray-700 leading-relaxed mb-8"
            >
              Please share your requirements, and our team will get back to you to discuss the best
              way forward.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
            >
              <img
                src="https://www.burgerhuyserattorneys.co.za/wp-content/uploads/2025/04/Top-law-firms-in-Centurion-1.jpg"
                alt="Casa Di Consiglio advisory team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(189,169,133,0.4) 100%)',
                }}
              />
              <p className="absolute bottom-6 left-6 right-6 text-white font-bold text-lg leading-snug">
                Better decisions begin with the right conversation.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div
              className="p-7 md:p-10 rounded-3xl bg-white"
              style={{
                border: '2px solid rgba(189,169,133,0.25)',
                boxShadow: '0 20px 40px rgba(189,169,133,0.12)',
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: 'rgba(189,169,133,0.2)' }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: '#bda985' }} />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4">Your enquiry is ready to send</h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Your email application should have opened with your enquiry prepared. If it did
                    not, please email us directly at{' '}
                    <a
                      href={`mailto:${RECIPIENT}`}
                      className="font-bold underline"
                      style={{ color: '#bda985' }}
                    >
                      {RECIPIENT}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wide border-2 border-[#bda985] text-[#6B5B47] hover:bg-[#bda985] hover:text-black transition-colors duration-300"
                  >
                    Edit Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label className="flex items-center text-sm font-bold text-black mb-2">
                        <User className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={handleChange('fullName')}
                        placeholder="Your full name"
                        className={inputBase}
                        style={fieldStyle(errors.fullName)}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-2 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="flex items-center text-sm font-bold text-black mb-2">
                        <Building2 className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={form.companyName}
                        onChange={handleChange('companyName')}
                        placeholder="Your company"
                        className={inputBase}
                        style={fieldStyle(false)}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="flex items-center text-sm font-bold text-black mb-2">
                        <Mail className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        placeholder="you@company.com"
                        className={inputBase}
                        style={fieldStyle(errors.email)}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-2 font-medium">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center text-sm font-bold text-black mb-2">
                        <Phone className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        placeholder="+971 ..."
                        className={inputBase}
                        style={fieldStyle(false)}
                      />
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div className="mb-5">
                    <label className="flex items-center text-sm font-bold text-black mb-3">
                      <Layers className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
                      Service of Interest *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map((option) => {
                        const active = form.service === option;
                        return (
                          <motion.button
                            key={option}
                            type="button"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              setForm((prev) => ({ ...prev, service: option }));
                              setErrors((prev) => ({ ...prev, service: undefined }));
                            }}
                            className="px-5 py-3 rounded-xl text-sm font-semibold transition-colors duration-300"
                            style={{
                              background: active ? '#bda985' : 'rgba(189,169,133,0.08)',
                              color: active ? '#18181b' : '#3f3f46',
                              border: active
                                ? '2px solid #bda985'
                                : '2px solid rgba(189,169,133,0.25)',
                            }}
                          >
                            {option}
                          </motion.button>
                        );
                      })}
                    </div>
                    {errors.service && (
                      <p className="text-xs text-red-600 mt-2 font-medium">{errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="flex items-center text-sm font-bold text-black mb-2">
                      <MessageSquare className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Tell us about your requirements"
                      className={`${inputBase} resize-none`}
                      style={fieldStyle(errors.message)}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-2 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full px-10 py-5 rounded-2xl font-bold text-base uppercase tracking-wide shadow-xl"
                    style={{ background: '#bda985', color: '#18181b' }}
                  >
                    <span className="flex items-center justify-center">
                      Send Your Enquiry
                      <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
