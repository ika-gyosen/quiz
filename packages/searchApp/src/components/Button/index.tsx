import { MouseEvent } from 'react';
import { Button as MUIButton } from '@mui/material';

type Props = {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'outlined' | 'contained' | 'text';
};

export const Button = ({ label, onClick, variant = 'outlined' }: Props) => {
  return (
    <MUIButton variant={variant} onClick={onClick} color="inherit">
      {label}
    </MUIButton>
  );
};
