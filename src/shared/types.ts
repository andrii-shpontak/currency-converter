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
