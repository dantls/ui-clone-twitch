import React from 'react';

import { ThemeContextProvider  } from './toggleTheme';

const AppProvider: React.FC = ({ children }) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);

export default AppProvider;