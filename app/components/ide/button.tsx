import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wider transition-all duration-150 select-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58B4EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1F25]';

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#58B4EE] text-[#0D1117] border border-[#7CC4FF] hover:bg-[#7CC4FF]',
  secondary:
    'bg-[#1E293B]/80 text-[#93C5FD] border border-[#58B4EE]/45 hover:bg-[#58B4EE]/15 hover:text-[#E6EDF3] hover:border-[#58B4EE]',
  outline:
    'bg-[#1E1F25] text-[#CBD5E1] border border-[#3B4353] hover:border-[#58B4EE] hover:text-[#58B4EE] hover:bg-[#24262E]',
  ghost:
    'bg-transparent text-[#94A3B8] border border-transparent hover:text-[#58B4EE] hover:bg-[#58B4EE]/10',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-[11px]',
  md: 'px-4 py-2 text-xs',
  lg: 'px-5 py-2.5 text-xs',
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
