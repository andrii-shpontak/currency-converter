import { Box, Theme } from '@radix-ui/themes';

import { Header } from './Header';
import type { ILayoutProps } from '../shared/types';
import Notification from './Notification';
// import Loader from './Loader';
import React from 'react';
import { layoutRadixColors } from '../shared/constants';
import { useFetchExchangeData } from '../utils/hooks';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  useFetchExchangeData();
  return (
    <Theme accentColor='yellow'>
      <Box className='min-h-screen'>
        <Header />
        <main
          style={layoutRadixColors}
          className='flex flex-col items-center justify-center py-6 px-4 h-[calc(100vh-3rem)]'>
          {/* {true ? */}
          {/* <Loader /> */}
          {children}
        </main>
      </Box>
      <Notification />
    </Theme>
  );
};
