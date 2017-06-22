import React from 'react';
import './Loading.css';

const Loading = ({loading}) => {
  return loading ? (<div className='loading'></div>) : null;
};
export default Loading;


