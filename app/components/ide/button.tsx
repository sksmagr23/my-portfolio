import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 rounded-[5px] font-semibold uppercase tracking-[0.07em] transition-all duration-200 ease-out select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-accent';

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-theme-accent text-theme-accentContrast border border-theme-accentBright shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_2px_8px_rgba(0,0,0,0.3)] hover:bg-theme-accentBright hover:-translate-y-[1px] hover:shadow-[0_6px_18px_-3px_rgb(var(--theme-accent)/0.42)]',
  secondary:
    'bg-theme-btnSecondary text-theme-accentSecText border border-theme-accent/80 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset] hover:bg-theme-accent hover:text-theme-accentContrast hover:border-theme-accentBright hover:-translate-y-[1px] hover:shadow-[0_6px_16px_-3px_rgb(var(--theme-accent)/0.32)]',
  outline:
    'bg-theme-btnOutline text-theme-textSecondary border border-theme-borderStrong shadow-[0_1px_2px_rgba(0,0,0,0.25)] hover:border-theme-accent/70 hover:text-theme-accent hover:bg-theme-surfaceTintHover hover:-translate-y-[1px]',
  ghost:
    'bg-transparent text-theme-accent border border-transparent hover:text-theme-accentBright hover:bg-theme-accent/10',
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
