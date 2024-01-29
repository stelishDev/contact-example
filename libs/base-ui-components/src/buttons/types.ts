export enum Variant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

export enum ButtonRounded {
  Full,
  Large,
}

export enum ButtonSize {
  Medium,
  Small,
}

export type LabelButtonProps = {
  label: React.ReactNode;
  icon?: Icon;
  variant: Variant;
  rounded?: ButtonRounded;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  form?: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  testId: string;
};

type Icon = {
  icon: React.ReactNode;
  orientation: 'left' | 'right';
};
