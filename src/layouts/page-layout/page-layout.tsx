import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';

// Components
import Footer from '../footer';
import Header from '../header';

// Contexts
import { useTheme } from 'contexts/theme-context';

const PageLayout: FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div data-theme={theme}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PageLayout;
