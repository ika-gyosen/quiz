import { ChangeEvent, useCallback } from 'react';

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
    (e: ChangeEvent<HTMLSelectElement>) => onChange(e.currentTarget.value as T),
    [onChange],
  );

  return (
    <select value={value} onChange={handleChange}>
      {options.map(({ value, label }) => {
        return (
          <option value={value} key={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
