import type { TNotificationProvider } from '../shared/types';
import { useEffect } from 'react';

const NotificationProvider = ({ notification, handleClose }: TNotificationProvider) => {
  const handleClick = () => {
    handleClose(notification);
  };

  useEffect((): (() => void) => {
    const timer = setTimeout((): void => handleClose(notification), 5000);
    return (): void => {
      clearTimeout(timer);
    };
  }, [notification, handleClose]);

  return (
    <div className={`relative p-2 pr-4 pb-4 rounded text-white text-base z-[9999] ${notification.type}`}>
      <div className='absolute right-2 top-0 text-2xl cursor-pointer' onClick={handleClick}>
        &times;
      </div>
      <div className='text-lg font-semibold mb-1'>{notification.title}</div>
      <div>{notification.text}</div>
    </div>
  );
};

export default NotificationProvider;
