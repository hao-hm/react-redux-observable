import React from 'react';
import './Alert.css';

const Alert = ({message}) => {
  return message ? (<div className="alert">{message}</div>) : null;
};
export default Alert;