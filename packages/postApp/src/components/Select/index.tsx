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
  value: T | undefined;
  options: Option<T>[];
  onChange: (Input: Option<T>) => void;
};

export const Select = <T extends string | number>({
  value,
  options,
  onChange,
}: Props<T>) => {
  const handleChange = useCallback(
    (e: SelectChangeEvent<T>) =>
      onChange({ label: e.target.name, value: e.target.value as T }),
    [onChange],
  );

  return (
    <FormControl size="small">
      <MUISelect
        onChange={handleChange}
        value={value ?? ''}
        sx={{ height: '2.4rem', width: '20rem' }}>
        {options.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};
