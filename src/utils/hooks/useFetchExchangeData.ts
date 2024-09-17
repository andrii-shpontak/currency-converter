import type { TCurrency, TExchangeResponseError } from '../../shared/types';
import { useCallback, useEffect } from 'react';

import { NotificationType } from '../../shared/enums';
import { exchangeState } from '../atoms';
import { get } from '../services';
import { isAxiosError } from 'axios';
import { useAddNotification } from './useNotificationHandlers';
import { useSetRecoilState } from 'recoil';

export const useFetchExchangeData = () => {
  const setCurrenciesState = useSetRecoilState(exchangeState);

  const pushNotification = useAddNotification();

  const fetchCurrData = useCallback(async () => {
    const { data, error } = await get();
    switch (true) {
      case !!error && isAxiosError(error):
        pushNotification({
          type: NotificationType.Error,
          title: 'Exchange rates',
          text: (error as TExchangeResponseError).response?.data?.errText || error.message,
        });
        break;
      case !!data:
        pushNotification({
          type: NotificationType.Success,
          title: 'Exchange rates',
          text: 'Data received successfully',
        });
        setCurrenciesState(data as TCurrency[]);
        break;
      default:
        pushNotification({
          type: NotificationType.Warning,
          title: 'Exchange rates',
          text: 'Unknown error occurred',
        });
    }
  }, [pushNotification, setCurrenciesState]);

  useEffect(() => {
    fetchCurrData();
    // only when mounting the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {};
};
