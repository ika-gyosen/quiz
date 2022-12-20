import { css } from '@emotion/css';
import { Outlet } from 'react-router-dom';
import { Header } from '~/components/Header';
export const Layout = () => {
  return (
    <div className={baseStyle}>
      <Header user={'test'} />
      <main className={mainContentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

const baseStyle = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
  @supports not (height: 100dvh) {
    height: 100vh;
  }
`;

const mainContentStyle = css`
  flex: 1;
`;
