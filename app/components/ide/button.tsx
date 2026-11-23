import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.07em] transition-all duration-150 select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#58B4FF]';

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#58B4FF] text-[#0D1117] border border-[#7CC4FF] shadow-[2px_2px_0px_rgba(0,0,0,0.55),0_0_18px_-4px_rgba(88,180,255,0.55)] hover:bg-[#7CC4FF] active:translate-y-[1px]',
  secondary:
    'bg-[#1B2232] text-[#6CB8FF] border border-[#58B4FF] shadow-[2px_2px_0px_rgba(0,0,0,0.45)] hover:bg-[#58B4FF] hover:text-[#0D1117] active:translate-y-[1px]',
  outline:
    'bg-[#171A22] text-[#CBD5E1] border border-[#3B4459] shadow-[2px_2px_0px_rgba(0,0,0,0.35)] hover:border-[#58B4FF] hover:text-[#58B4FF] hover:bg-[#1D2434] active:translate-y-[1px]',
  ghost:
    'bg-transparent text-[#58B4FF] border border-transparent hover:text-[#7CC4FF] hover:bg-[#58B4FF]/10',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-[11px]',
  md: 'px-4 py-2 text-xs',
  lg: 'px-4 py-2.5 text-xs',
};

export function buttonClasses(
  variant: ButtonVariant = 'outline',
  size: ButtonSize = 'md',
  className = ''
) {
  return `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`.trim();
}

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ActionButton({
  variant = 'outline',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

interface ActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
}

export function ActionLink({
  variant = 'outline',
  size = 'md',
  className = '',
  external = false,
  ...props
}: ActionLinkProps) {
  return (
    <a
      target={external ? '_blank' : props.target}
      rel={external ? 'noopener noreferrer' : props.rel}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}
