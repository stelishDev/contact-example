import { clsx } from 'clsx';
import { useMemo } from 'react';
import { ButtonRounded, ButtonSize, LabelButtonProps, Variant } from './types';

export const LabelButton: React.FC<LabelButtonProps> = ({
  label,
  icon,
  disabled = false,
  variant,
  onClick,
  form,
  type = 'button',
  className,
  rounded = ButtonRounded.Large,
  size = ButtonSize.Medium,
  testId,
}: LabelButtonProps) => {
  const baseStyle = useMemo(() => {
    const base = clsx(
      rounded === ButtonRounded.Large && 'rounded-lg',
      rounded === ButtonRounded.Full && 'rounded-full',
      'border shadow-button-default hover:shadow-button-hover focus:shadow-button-focus disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none',
      variant === Variant.Primary &&
        'border-talspot-primary bg-talspot-primary text-white',
      variant === Variant.Secondary &&
        'border-talspot-primary bg-white text-talspot-primary hover:bg-talspot-primary/5',
      (variant === Variant.Primary || variant === Variant.Secondary) &&
        size === ButtonSize.Medium &&
        'min-w-[96px]'
    );
    return base;
  }, [rounded, variant, size]);
  return (
    <button
      className={clsx(
        'flex items-center justify-center ',
        icon?.orientation === 'left' && 'pl-1 pr-4',
        icon?.orientation === 'right' && 'px-3',
        baseStyle,
        size === ButtonSize.Medium && 'h-8 text-base',
        size === ButtonSize.Medium && !icon && 'px-6',
        size === ButtonSize.Small && 'h-6 text-xs',
        size === ButtonSize.Small && !icon && 'px-3',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      form={form}
      type={type}
    >
      {icon?.orientation === 'left' && icon.icon}
      <span
        className={clsx(
          'truncate text-sm',
          icon?.orientation === 'left' && 'pl-0.5',
          icon?.orientation === 'right' && 'pr-0.5'
        )}
        data-testid={`${testId}-label`}
      >
        {label}
      </span>
      {icon?.orientation === 'right' && (
        <span className="flex flex-1 justify-end">{icon.icon}</span>
      )}
    </button>
  );
};
