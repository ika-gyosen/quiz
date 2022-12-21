import { MouseEvent } from 'react';
import { Button as MUIButton } from '@mui/material';

type Props = {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: 'outlined' | 'contained' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button = ({
  label,
  onClick,
  disabled = false,
  variant = 'outlined',
  startIcon,
  endIcon,
}: Props) => {
  return (
    <MUIButton
      variant={variant}
      onClick={onClick}
      color="inherit"
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}>
      {label}
    </MUIButton>
  );
};
