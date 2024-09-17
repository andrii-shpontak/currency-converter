import { Box, Theme } from '@radix-ui/themes';

import Header from './Header';
import type { ILayoutProps } from '../shared/types';
import Loader from './Loader';
import Notification from './Notification';
import React from 'react';
import { activeRequestsState } from '../utils/atoms';
import { layoutRadixColors } from '../shared/constants';
import { useFetchExchangeData } from '../utils/hooks';
import { useRecoilValue } from 'recoil';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const activeRequests = useRecoilValue(activeRequestsState);

  useFetchExchangeData();
  return (
    <Theme accentColor='cyan' appearance='inherit'>
      <Box className='min-h-screen'>
        <Header />
        <main
          style={layoutRadixColors}
          className='flex flex-col items-center justify-center py-6 px-4 h-[calc(100vh-3rem)]'>
          {!!activeRequests ? <Loader /> : children}
        </main>
      </Box>
      <Notification />
    </Theme>
  );
};
