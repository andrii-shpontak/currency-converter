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

  const pushFetchCurrNotification = useCallback(
    (type: NotificationType, text: string) => {
      pushNotification({
        type,
        title: 'Exchange rates',
        text,
      });
    },
    [pushNotification],
  );

  const fetchCurrData = useCallback(async () => {
    const { data, error } = await get();
    switch (true) {
      case !!error && isAxiosError(error):
        pushFetchCurrNotification(
          NotificationType.Error,
          (error as TExchangeResponseError).response?.data?.errText || error.message,
        );
        break;
      case !!data:
        pushFetchCurrNotification(NotificationType.Success, 'Data received successfully');
        setCurrenciesState(data as TCurrency[]);
        break;
      default:
        pushFetchCurrNotification(NotificationType.Warning, 'Unknown error occurred');
        break;
    }
  }, [pushFetchCurrNotification, setCurrenciesState]);

  useEffect(() => {
    fetchCurrData();
    // only when mounting the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {};
};
