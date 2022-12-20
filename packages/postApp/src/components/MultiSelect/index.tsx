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
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = useCallback((e: SelectChangeEvent<string[]>) => {
    setSelected(e.target.value as string[]);
  }, []);

  useEffect(() => {
    onChange(options.filter(({ label }) => selected.includes(label)));
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
        {options.map(({ label }) => {
          return (
            <MenuItem key={label} value={label}>
              <Checkbox checked={selected.includes(label)} />
              <ListItemText primary={label} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
