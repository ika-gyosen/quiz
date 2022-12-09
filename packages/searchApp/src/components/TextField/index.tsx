import { ChangeEvent, useCallback } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const TextField = ({ value, onChange }: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value),
    [onChange],
  );

  return <input value={value} onChange={handleChange} />;
};
