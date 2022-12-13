import { ChangeEvent, useCallback } from 'react';
import { TextField as MUITextField } from '@mui/material';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const TextField = ({ value, onChange }: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value),
    [onChange],
  );

  return (
    <MUITextField value={value} onChange={handleChange} variant="standard" />
  );
};
