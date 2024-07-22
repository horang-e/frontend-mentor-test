import { useState } from 'react';

export const useLocalStorage = () => {
  const [data, setData] = useState<{ [key: string]: any }>();

  const setStorage = (key: string, data: any) => {
    localStorage.setItem(key, data);
  };

  const getStorage = (key: string) => {
    localStorage.getItem(key);
  };
};
