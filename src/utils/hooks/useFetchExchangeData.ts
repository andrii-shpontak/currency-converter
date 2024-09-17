import type { TCurrencyResponse, TExchangeResponseError, TFullCurrData } from '../../shared/types';
import { useCallback, useEffect } from 'react';

import { NotificationType } from '../../shared/enums';
import { exchangeState } from '../atoms';
import { get } from '../services';
import { isAxiosError } from 'axios';
import { number } from 'currency-codes';
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

    if (!!error || !data) {
      pushFetchCurrNotification(
        NotificationType.Error,
        (error as TExchangeResponseError).response?.data?.errText || 'Unknown error occurred',
      );
      return;
    }
    pushFetchCurrNotification(NotificationType.Success, 'Data received successfully');

    const filteredCurrencies = (data as TCurrencyResponse[]).filter(
      curr => Boolean(curr.rateBuy) && Boolean(curr.rateSell),
    );
    const fullDataCurrencies = filteredCurrencies.map(curr => {
      return {
        ...curr,
        currencyCodeA: number(String(curr.currencyCodeA)) as TFullCurrData,
        currencyCodeB: number(String(curr.currencyCodeB)) as TFullCurrData,
      };
    });

    setCurrenciesState(fullDataCurrencies);
  }, [pushFetchCurrNotification, setCurrenciesState]);

  useEffect(() => {
    // fetchCurrData();
    // only when mounting the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {};
};
