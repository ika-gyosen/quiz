import { css } from '@emotion/css';
import { useState, useCallback, useEffect } from 'react';
import {
  Select,
  Checkbox,
  ListItemText,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

export type Option<T> = {
  value: T;
  label: string;
};

type Props<T> = {
  options: Option<T>[];
  onChange: (values: Option<T>[]) => void;
  width?: number;
};

export const MultiSelect = <T extends string | number>({
  onChange,
  options,
  width = 200,
}: Props<T>) => {
  const [selected, setSelected] = useState<T[]>([]);

  const handleChange = useCallback((e: SelectChangeEvent<T[]>) => {
    setSelected(e.target.value as T[]);
  }, []);

  useEffect(() => {
    onChange(options.filter(({ value }) => selected.includes(value)));
  }, [onChange, options, selected]);

  const multiSelectWrapperStyle = css`
    width: ${width}px;
  `;

  return (
    <FormControl className={multiSelectWrapperStyle}>
      <Select
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={() => selected.join()}>
        {options.map(({ value, label }) => {
          return (
            <MenuItem key={label} value={value}>
              <Checkbox checked={selected.includes(value)} />
              <ListItemText primary={label} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
