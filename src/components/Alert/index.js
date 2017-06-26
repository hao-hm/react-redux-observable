// @flow
import React from 'react';
import './Alert.css';

type Props = {
  message: string
}
const Alert = ({message}: Props) => {
  return message ? (<div className="alert">{message}</div>) : null;
};
export default Alert;