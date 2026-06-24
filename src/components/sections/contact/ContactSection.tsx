"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Twitter, Facebook, Instagram, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── Contact Info ─────────────────────────────────────────────────────────────

const contactDetails = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <Mail size={18} />,
    label: "Alternative Email",
    value: SITE_CONFIG.emailAlt,
    href: `mailto:${SITE_CONFIG.emailAlt}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <Globe size={18} />,
    label: "Website",
    value: "cpdforum.org",
    href: SITE_CONFIG.url,
  },
];

const socialLinks = [
  { icon: <Twitter size={18} />, label: "Twitter / X", handle: "@cpdfkenya", href: SITE_CONFIG.social.twitter },
  { icon: <Facebook size={18} />, label: "Facebook", handle: "CPDFORUM", href: SITE_CONFIG.social.facebook },
  { icon: <Instagram size={18} />, label: "Instagram", handle: "@cpdfKenya", href: SITE_CONFIG.social.instagram },
];

// ─── Form Field ───────────────────────────────────────────────────────────────

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-slate-900 text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full bg-cpdf-dark border border-cpdf-dark-border rounded-xl px-4 py-3 text-slate-900 placeholder:text-cpdf-muted/50 text-sm focus:outline-none focus:border-cpdf-teal/60 focus:ring-1 focus:ring-cpdf-teal/30 transition-colors";

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulated submit — replace with real API call or mailto
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center gap-5 py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cpdf-teal/15 border border-cpdf-teal/30">
          <CheckCircle size={32} className="text-cpdf-teal" />
        </div>
        <h3 className="font-display font-bold text-slate-900 text-2xl">Message Sent!</h3>
        <p className="text-cpdf-muted max-w-xs leading-relaxed">
          Thank you for reaching out. The CPDF team will get back to you within 2 business days.
        </p>
        <Button variant="outline" size="sm" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
          Send Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" id="name" error={errors.name}>
          <input
            id="name"
            type="text"
            className={cn(inputClass, errors.name && "border-red-400/60")}
            placeholder="John Kamau"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Field>
        <Field label="Email Address" id="email" error={errors.email}>
          <input
            id="email"
            type="email"
            className={cn(inputClass, errors.email && "border-red-400/60")}
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Field>
      </div>

      <Field label="Subject" id="subject" error={errors.subject}>
        <select
          id="subject"
          className={cn(inputClass, errors.subject && "border-red-400/60")}
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
        >
          <option value="">Select a subject…</option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="youth-program">Youth Program Application</option>
          <option value="media">Media & Press</option>
          <option value="volunteer">Volunteering</option>
          <option value="general">General Inquiry</option>
        </select>
      </Field>

      <Field label="Message" id="message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClass, "resize-none", errors.message && "border-red-400/60")}
          placeholder="Tell us how we can help or collaborate…"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </Field>

      <Button type="submit" size="lg" loading={loading} icon={<Send size={16} />} className="w-full">
        Send Message
      </Button>
    </form>
  );
}

// ─── Full Contact Section ─────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <section className="section-padding bg-cpdf-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact details */}
            <div>
              <SlideIn direction="left">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">
                  Contact Details
                </h2>
              </SlideIn>
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {contactDetails.map((item) => (
                  <StaggerItem key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card hover:border-cpdf-teal/30 transition-all duration-200"
                    >
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-cpdf-teal/10 text-cpdf-teal border border-cpdf-teal/20 group-hover:bg-cpdf-teal/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-cpdf-muted text-xs mb-0.5">{item.label}</p>
                        <p className="text-slate-900 text-sm font-medium group-hover:text-cpdf-teal transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Social */}
            <div>
              <SlideIn direction="left" delay={0.2}>
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-5">
                  Follow Us
                </h2>
              </SlideIn>
              <StaggerContainer className="space-y-3" staggerDelay={0.08} initialDelay={0.1}>
                {socialLinks.map((s) => (
                  <StaggerItem key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl border border-cpdf-dark-border bg-cpdf-dark-card hover:border-cpdf-teal/30 transition-all duration-200"
                    >
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 text-cpdf-muted border border-cpdf-dark-border group-hover:bg-cpdf-teal/10 group-hover:text-cpdf-teal group-hover:border-cpdf-teal/20 transition-all">
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-cpdf-muted text-xs mb-0.5">{s.label}</p>
                        <p className="text-slate-900 text-sm font-medium group-hover:text-cpdf-teal transition-colors">
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.15}>
              <div className="p-8 rounded-2xl border border-cpdf-dark-border bg-cpdf-dark-card">
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-cpdf-muted text-sm mb-8 leading-relaxed">
                  Fill in the form below and a member of the CPDF team will respond
                  within 2 business days.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
