import './Notification.scss';

import { TNotification, TNotificationState } from '../shared/types';
import { useCallback, useEffect } from 'react';

import NotificationProvider from './NotificationProvider';
import { notificationState } from '../utils/atoms';
import { useRecoilValue } from 'recoil';
import { useRemoveNotification } from '../utils/hooks';

const Notification = () => {
  const state = useRecoilValue<TNotificationState>(notificationState);

  const removeNotification = useRemoveNotification();

  const handleClose = useCallback(
    (notification: TNotification): void => {
      removeNotification(notification.id);
    },
    [removeNotification],
  );

  useEffect(() => {
    if (state.notifications.length > 4) {
      handleClose(state.notifications[0]);
    }
  }, [handleClose, state]);

  return (
    <div className='fixed flex bottom-0 right-0 flex-col-reverse gap-4 z-0 h-0'>
      {state.notifications.map((notification, i) => (
        <NotificationProvider notification={notification} handleClose={handleClose} key={i} />
      ))}
    </div>
  );
};

export default Notification;
