import { useCallback } from 'react';
import {
  Select as MUISelect,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export type Option<T> = {
  value: T;
  label: string;
};

type Props<T> = {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
};

export const Select = <T extends string | number>({
  value,
  options,
  onChange,
}: Props<T>) => {
  const handleChange = useCallback(
    (e: SelectChangeEvent<T>) => onChange(e.target.value as T),
    [onChange],
  );

  return (
    <FormControl size="small">
      <MUISelect onChange={handleChange} value={value}>
        {options.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};
