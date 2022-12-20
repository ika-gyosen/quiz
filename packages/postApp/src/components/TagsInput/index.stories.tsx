import { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { css } from '@emotion/css';
import { Option, TagsInput } from '~/components/TagsInput';
export default {
  component: TagsInput,
  title: 'components/TagsInput',
};

const options: Option<number>[] = [
  { label: 'タグ１', value: 1 },
  { label: 'タグ２', value: 2 },
];

const Template: Story<ComponentProps<typeof TagsInput>> = (args) => {
  const [values, setValues] = useState<Option<number>[]>([]);
  const onChange = (item: Option<number>[]) => {
    setValues(item);
    console.log(item);
  };
  return (
    <div>
      <div className={containerStyle}>
        <span>Default</span>
        <TagsInput
          options={args.options as Option<number>[]}
          onChange={onChange}
          values={values}
        />
      </div>
      <span>result: </span>
      {values.map((item) => {
        return <span key={item.label}>{item.label} </span>;
      })}
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

const cardInnerStyle = css`
  padding: 8px;
`;

const paragraphStyle = css`
  margin: 0;
`;
