'use client';

import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { contactContent, personalInfo } from '@/app/data/portfolio';
import { GitHubIcon, LinkedInIcon } from '../icons';
import { ActionButton, ActionLink } from '../button';

interface ContactSectionProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export function ContactSection({ onCopyEmail, copiedEmail }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const next: Record<string, string> = {};
    if (formData.name.trim().length < 2) {
      next.name = 'Please enter your name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (formData.subject.trim().length < 3) {
      next.subject = 'Please include a short subject.';
    }
    if (formData.message.trim().length < 10) {
      next.message = 'Please write at least 10 characters so I have context.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(
          `Could not deliver via mail server right now. Please email ${personalInfo.email} directly.`
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        `Network error while sending. You can email ${personalInfo.email} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#58B4FF]">
          {contactContent.eyebrow}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3]">
          {contactContent.heading}
        </h2>
        <p className="text-sm text-[#94A3B8]">{contactContent.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-lg bg-[#24262E] border border-[#3B4353] p-5 space-y-2.5">
            <h4 className="text-xs font-bold text-[#58B4FF]">Availability</h4>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {contactContent.availabilityNote}
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="rounded-lg bg-[#24262E] border border-[#3B4353] p-4 flex items-center justify-between gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 min-w-0 group"
              >
                <span className="p-2.5 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8]">Email</div>
                  <div className="text-sm text-[#E6EDF3] group-hover:text-[#58B4FF] truncate transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>
              <ActionButton variant="secondary" size="sm" onClick={onCopyEmail} className="shrink-0">
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </ActionButton>
            </div>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF] p-4 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="p-2.5 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                  <LinkedInIcon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8]">LinkedIn</div>
                  <div className="text-sm text-[#E6EDF3] group-hover:text-[#58B4FF] truncate transition-colors">
                    linkedin.com/in/saksham-agrawal
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#58B4FF] shrink-0" />
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#24262E] border border-[#3B4353] hover:border-[#58B4FF] p-4 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="p-2.5 rounded-md bg-[#1E1F25] border border-[#2E3340] text-[#58B4FF]">
                  <GitHubIcon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8]">GitHub</div>
                  <div className="text-sm text-[#E6EDF3] group-hover:text-[#58B4FF] truncate transition-colors">
                    github.com/{personalInfo.githubUsername}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#58B4FF] shrink-0" />
            </a>
          </div>
        </div>

        {/* Right Validated Contact Form */}
        <div className="lg:col-span-7 rounded-lg bg-[#24262E] border border-[#3B4353] p-5 sm:p-6">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2 rounded-md bg-[#1E1F25] border border-[#3B4353] text-sm text-[#E6EDF3] placeholder-[#64748B] focus:border-[#58B4FF] focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-[#93C5FD]">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 rounded-md bg-[#1E1F25] border border-[#3B4353] text-sm text-[#E6EDF3] placeholder-[#64748B] focus:border-[#58B4FF] focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[#93C5FD]">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5"
              >
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Role opportunity, collaboration, or project inquiry"
                className="w-full px-3 py-2 rounded-md bg-[#1E1F25] border border-[#3B4353] text-sm text-[#E6EDF3] placeholder-[#64748B] focus:border-[#58B4FF] focus:outline-none"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-[#93C5FD]">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-1.5"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share details about the opportunity or project..."
                className="w-full px-3 py-2 rounded-md bg-[#1E1F25] border border-[#3B4353] text-sm text-[#E6EDF3] placeholder-[#64748B] focus:border-[#58B4FF] focus:outline-none resize-y"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-[#93C5FD]">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <ActionButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </ActionButton>

              <ActionLink
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                  formData.subject || 'Portfolio Inquiry'
                )}`}
                variant="ghost"
                size="sm"
              >
                <span>Open Mail Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </ActionLink>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-[#58B4FF]/12 border border-[#58B4FF]/45 text-xs text-[#93C5FD]">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#58B4FF]" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-[#1E293B] border border-[#58B4FF]/45 text-xs text-[#CBD5E1]">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#58B4FF]" />
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
