import type { TNotificationState } from '../../shared/types';
import { atom } from 'recoil';

export const notificationState = atom<TNotificationState>({
  key: 'notificationState',
  default: { notifications: [] },
});
