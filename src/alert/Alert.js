import React from 'react';
import { useAlert } from './AlertContext';

export const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div className="alert alert-danger" onClick={alert.toggle}>
      Это очень и очень важное сообщение!
    </div>
  );
};
