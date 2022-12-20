import { css } from '@emotion/css';
import { ReactNode, FC } from 'react';

type Props = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  control?: ReactNode;
};

export const FormControlLabel: FC<Props> = ({
  label,
  htmlFor,
  required,
  control,
}) => {
  return (
    <label htmlFor={htmlFor}>
      {required ? (
        <div className={labelContainerStyle}>
          <span className={labelStyle}>{label}</span>
          <span className={requiredSymbolStyle}>(必須)</span>
        </div>
      ) : (
        <div>
          <span className={labelStyle}>{label}</span>
        </div>
      )}
      {control}
    </label>
  );
};

const labelContainerStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const labelStyle = css`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
`;

const requiredSymbolStyle = css`
  color: #ff0000;
  font-size: 12px;
  padding: 0px 4px;
  margin-left: 4px;
`;
