import { useEffect, useState } from 'react';

export default function NextBankLink() {
  const [href, setHref] = useState('https://www.nextbank.com.tw/app');
  const [selectedAction, setSelectedAction] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    let baseUrl = 'https://www.nextbank.com.tw/app';

    // Add action query parameter if selected
    if (selectedAction) {
      baseUrl += `?action=${selectedAction}`;
    }

    if (isIOS) {
      setHref(baseUrl);
    } else if (isAndroid) {
      const fallbackUrl = encodeURIComponent(baseUrl);
      setHref(`intent://www.nextbank.com.tw/app${selectedAction ? `?action=${selectedAction}` : ''}#Intent;scheme=https;package=com.nextbank.ncbportal;S.browser_fallback_url=${fallbackUrl};end`);
    } else {
      setHref(baseUrl);
    }
  }, [selectedAction]);

  const handleClick = () => {
    setTimeout(() => {
      let redirectUrl = 'https://www.nextbank.com.tw/app';
      if (selectedAction) {
        redirectUrl += `?action=${selectedAction}`;
      }
      window.location.href = redirectUrl;
    }, 2000);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAction(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="action-select" style={{ display: 'block', marginBottom: '8px' }}>
          選擇功能：
        </label>
        <select
          id="action-select"
          value={selectedAction}
          onChange={handleSelectChange}
          style={{ padding: '8px', fontSize: '16px' }}
        >
          <option value="">no action</option>
          <option value="active_card">開啟卡片功能</option>
          <option value="account_upgrade">開啟帳戶升級</option>
          <option value="mgm_share_qrcode">開啟邀請好友</option>
          <option value="point_add_point">開啟將來N點</option>
        </select>
      </div>
      <a href={href} onClick={handleClick}>Open NextBank App</a>
    </div>
  );
}
