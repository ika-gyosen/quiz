import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export type Option<T> = {
  value: T;
  label: string;
};
type Props<T> = {
  values: Option<T>[];
  options: Option<T>[];
  onChange: (values: Option<T>[]) => void;
};

export const TagsInput = <T extends string | number>({
  onChange,
  values,
  options,
}: Props<T>) => {
  return (
    <Autocomplete
      multiple
      value={values}
      options={options}
      onChange={(_, values) => {
        onChange(values);
      }}
      isOptionEqualToValue={(option, value) => {
        // 選択肢と選択された値が等しいかチェックする関数。これがないとワーニングが出てしまう。
        return option.label === value.label;
      }}
      renderInput={(params) => <TextField {...params} variant="standard" />}
    />
  );
};
