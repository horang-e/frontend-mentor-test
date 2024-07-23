import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T, (value: T) => void] {
  // 상태 초기화 함수
  const initialize = (): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  // 상태 및 업데이트 함수
  const [storedValue, setStoredValue] = useState<T>(initialize);

  // localStorage 업데이트 함수
  const setValue = (value: T) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  // 컴포넌트 마운트 시 localStorage에서 값 로드
  useEffect(() => {
    setStoredValue(initialize());
  }, [key]);

  return [storedValue, setValue];
}

export const getLocalValue = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
