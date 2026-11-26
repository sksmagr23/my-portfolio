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
import { SpotlightCard, SpotlightLinkCard } from '../spotlight-card';

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
      next.name = 'Please enter your name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (formData.subject.trim().length < 3) {
      next.subject = 'Please include a short subject.';
    }
    if (formData.message.trim().length < 10) {
      next.message = 'Please write at least 10 characters.';
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
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-base font-bold text-theme-accent flex items-center gap-2">
          <span className="text-theme-accent">#</span>
          <span>{contactContent.heading}</span>
        </h2>
        <p className="text-[14px] text-theme-textMuted">{contactContent.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5 space-y-3">
          <SpotlightCard as="div" interactive index={0} className="p-4">
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 min-w-0 group"
              >
                <span className="w-10 h-10 rounded-[6px] bg-theme-surfaceTint border border-theme-accent/35 text-theme-accent flex items-center justify-center shrink-0 transition-all duration-200 group-hover/card:border-theme-accent/70">
                  <Mail className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-theme-textDim">Email</div>
                  <div className="text-sm text-theme-text group-hover:text-theme-accent truncate transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>
              <ActionButton variant="outline" size="sm" onClick={onCopyEmail} className="shrink-0">
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-theme-accent" />
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
          </SpotlightCard>

          <SpotlightLinkCard
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            index={1}
            className="p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-10 h-10 rounded-[6px] bg-theme-surfaceTint border border-theme-accent/35 text-theme-accent flex items-center justify-center shrink-0 transition-all duration-200 group-hover/card:border-theme-accent group-hover/card:shadow-[0_0_12px_rgb(var(--theme-accent)/0.2)]">
                  <LinkedInIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-theme-textDim">LinkedIn</div>
                  <div className="text-sm text-theme-text group-hover/card:text-theme-accent truncate transition-colors">
                    linkedin.com/in/saksham-agrawal
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-theme-textDim transition-all duration-200 group-hover/card:text-theme-accent group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 shrink-0" />
            </div>
          </SpotlightLinkCard>

          <SpotlightLinkCard
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            index={2}
            className="p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-10 h-10 rounded-[6px] bg-theme-surfaceTint border border-theme-accent/35 text-theme-accent flex items-center justify-center shrink-0 transition-all duration-200 group-hover/card:border-theme-accent group-hover/card:shadow-[0_0_12px_rgb(var(--theme-accent)/0.2)]">
                  <GitHubIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-theme-textDim">GitHub</div>
                  <div className="text-sm text-theme-text group-hover/card:text-theme-accent truncate transition-colors">
                    github.com/{personalInfo.githubUsername}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-theme-textDim transition-all duration-200 group-hover/card:text-theme-accent group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 shrink-0" />
            </div>
          </SpotlightLinkCard>
        </div>

        <SpotlightCard as="div" interactive={false} index={1} className="lg:col-span-7 p-5">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-theme-textSecondary mb-1.5"
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
                  className="w-full px-3 py-2 rounded-[5px] bg-theme-surfaceInput border border-theme-border text-sm text-theme-text placeholder:text-theme-textFaint focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 focus:outline-none transition-all duration-150"
                />
                {errors.name && <p className="mt-1 text-xs text-theme-accentSoft">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-theme-textSecondary mb-1.5"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                  className="w-full px-3 py-2 rounded-[5px] bg-theme-surfaceInput border border-theme-border text-sm text-theme-text placeholder:text-theme-textFaint focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 focus:outline-none transition-all duration-150"
                />
                {errors.email && <p className="mt-1 text-xs text-theme-accentSoft">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-semibold uppercase tracking-wider text-theme-textSecondary mb-1.5"
              >
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Role opportunity or collaboration"
                className="w-full px-3 py-2 rounded-[5px] bg-theme-surfaceInput border border-theme-border text-sm text-theme-text placeholder:text-theme-textFaint focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 focus:outline-none transition-all duration-150"
              />
              {errors.subject && <p className="mt-1 text-xs text-theme-accentSoft">{errors.subject}</p>}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-theme-textSecondary mb-1.5"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share description..."
                className="w-full px-3 py-2 rounded-[5px] bg-theme-surfaceInput border border-theme-border text-sm text-theme-text placeholder:text-theme-textFaint focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20 focus:outline-none transition-all duration-150 resize-y"
              />
              {errors.message && <p className="mt-1 text-xs text-theme-accentSoft">{errors.message}</p>}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <ActionButton type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </ActionButton>

              <ActionLink
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                  formData.subject || 'Portfolio Inquiry'
                )}`}
                variant="ghost"
                size="sm"
                className="group/btn"
              >
                <span>Direct Mail</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </ActionLink>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-[5px] bg-theme-surfaceTint border border-theme-accent text-xs text-theme-accentSoft">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-theme-accent" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-[5px] bg-theme-surfaceTint border border-theme-accent/60 text-xs text-theme-textSecondary">
                <AlertCircle className="w-4 h-4 shrink-0 text-theme-accent" />
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </SpotlightCard>
      </div>
    </div>
  );
}
