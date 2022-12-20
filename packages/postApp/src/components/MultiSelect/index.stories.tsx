import { css } from '@emotion/css';
import { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { MultiSelect, Option } from '~/components/MultiSelect';

export default {
  component: MultiSelect,
  title: 'components/MultiSelect',
};

const options: Option<number>[] = [
  { label: 'タグ１', value: 1 },
  { label: 'タグ２', value: 2 },
  { label: 'タグ３', value: 3 },
  { label: 'タグ４', value: 4 },
  { label: 'タグ５タグ５タグ５タグ５タグ５', value: 5 },
];

const Template: Story<ComponentProps<typeof MultiSelect>> = (args) => {
  const [values, setValues] = useState<Option<number>[]>([]);
  const onChange = (item: Option<number>[]) => {
    setValues(item);
  };

  return (
    <div>
      <div>
        <span className={containerStyle}>Default</span>
        <MultiSelect
          options={args.options as Option<number>[]}
          onChange={onChange}
        />
      </div>
      <span>
        result:
        {values.map((item) => {
          return <span key={item.label}>{item.label}</span>;
        })}
      </span>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  options: options,
};

const containerStyle = css`
  width: 400px;
  margin-bottom: 16px;
`;
