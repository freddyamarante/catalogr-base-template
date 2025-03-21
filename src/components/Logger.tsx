'use client'

import React, { useEffect } from 'react';

interface LoggerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any;
}

const Logger: React.FC<LoggerProps> = ({ message }) => {

  useEffect(() => {
    console.log(message);
  }, [message])

  return (
    <>
    </>
  );
};

export default Logger;