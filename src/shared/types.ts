import { NotificationType } from './enums';
import { ReactNode } from 'react';

export interface ILayoutProps {
  children: ReactNode;
}

export type TNotificationButtonAction = {
  text: string;
  onClick: () => void;
};

export type TNotificationUpdate = {
  text: string;
  title: string;
  type: 'error' | 'warning' | 'info' | 'success';
  id?: string;
};

export type TNotification = {
  text: string;
  title?: string;
  type: NotificationType;
  id: string;
};

export type TNotificationState = {
  notifications: TNotification[];
};

export type TNotificationProvider = {
  notification: TNotification;
  handleClose: (n: TNotification) => void;
};

export type TCurrencyResponse = {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy: number;
  rateSell: number;
};

export type TFullCurrData = {
  code: string;
  countries: string[];
  currency: string;
  digits: number;
  number: string;
};

export type TCurrency = {
  currencyCodeA: TFullCurrData;
  currencyCodeB: TFullCurrData;
  date: number;
  rateBuy: number;
  rateSell: number;
};

export type TExchangeResponseError = {
  response?: {
    data?: {
      errText?: string;
    };
  };
  message: string;
};

export type TConverterValues = {
  a: { selectValue: string; inputValue: string };
  b: { selectValue: string; inputValue: string };
};

export type TCustomSelectProps = {
  value: string;
  onChange: (value: string, key: keyof TConverterValues) => void;
  items: string[];
  selectId: keyof TConverterValues;
};

export type TUseConverterHandlersProps = {
  exchangeData: TCurrency[] | null;
  converterValues: TConverterValues;
  setConverterValues: React.Dispatch<React.SetStateAction<TConverterValues>>;
};
