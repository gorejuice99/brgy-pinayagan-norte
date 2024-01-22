/* eslint-disable import/export */
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Authenticator.Provider>
      <BrowserRouter>{children}</BrowserRouter>
    </Authenticator.Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// override render export
export { customRender as render };
