import { useEffect } from 'react';

export default function TestClientSide() {
  useEffect(() => {
    window.location.href = 'https://www.nextbank.com.tw/app';
  }, []);

  return null;
}
