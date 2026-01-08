import { useEffect, useState } from 'react';

export default function NextBankLink() {
  const [href, setHref] = useState('https://www.nextbank.com.tw/app');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      setHref('https://www.nextbank.com.tw/app');
    } else if (isAndroid) {
      const fallbackUrl = encodeURIComponent('https://www.nextbank.com.tw/app');
      setHref(`intent://www.nextbank.com.tw/app#Intent;scheme=https;package=com.nextbank.ncbportal;S.browser_fallback_url=${fallbackUrl};end`);
    } else {
      setHref('https://www.nextbank.com.tw/app');
    }
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      window.location.href = 'https://www.nextbank.com.tw/app';
    }, 2000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <a href={href} onClick={handleClick}>Open NextBank App</a>
    </div>
  );
}
