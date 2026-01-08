import { useEffect } from 'react';

export default function TestClientSide() {
  useEffect(() => {
    window.location.href = `intent://www.nextbank.com.tw/app#Intent;scheme=https;package=com.nextbank.ncbportal;S.browser_fallback_url=${encodeURIComponent("https://www.nextbank.com.tw/app")};end`;
  }, []);

  return null;
}
