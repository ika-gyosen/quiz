import { FC } from 'react';
import { css } from '@emotion/css';

type Props = {
  user: string;
};
export const Header: FC<Props> = ({ user }) => {
  return (
    <header className={headerStyle}>
      <div>
        <h1 className={titleStyle}>QuizDatabase</h1>
      </div>
      <div className={userInfoStyle}>{user}</div>
    </header>
  );
};

const headerStyle = css`
  display: flex;
`;

const titleStyle = css`
  font-size: 1.4rem;
  padding-left: 1rem;
`;

const userInfoStyle = css`
  display: flex;
  margin: 0 1rem 0 auto;
  align-items: center;
`;
