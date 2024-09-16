import { TNotification } from '../../shared/types';
import { notificationState } from '../atoms';
import { useSetRecoilState } from 'recoil';

export const useAddNotification = () => {
  const setNotificationState = useSetRecoilState(notificationState);

  return (newNotification: Omit<TNotification, 'id'>) => {
    const id = String(Date.now());
    setNotificationState(prevState => ({
      notifications: [...prevState.notifications, { ...newNotification, id }],
    }));
  };
};

export const useRemoveNotification = () => {
  const setNotificationState = useSetRecoilState(notificationState);

  return (id: string) => {
    setNotificationState(prevState => ({
      notifications: prevState.notifications.filter(notification => notification.id !== id),
    }));
  };
};
