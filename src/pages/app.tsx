import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const App = ({ domain }: {domain: string}) => {
  const { query } = useRouter();
  const { deep, auto, invalid, action } = query;
  const [device, setDevice] = useState("");
  
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDevice("ios");
    }
    if (/android/.test(userAgent)) {
      setDevice("android");
    }
  }, []);

  const isAndroid = device === "android";
  const isIOS = device === "ios";

  const deepLink = useMemo(() => {
    const subdomain = domain || 'www';
    let url = `${subdomain}.nextbank.com.tw/app`;
    if (action) {
      url += `?action=${action}`;
    }
    return url;
  }, [action, domain]);
  

  useEffect(() => {
    if (auto === '1' && isAndroid) {
      console.log(`used href intent://${deepLink}#Intent;scheme=https;package=com.nextbank.ncbportal;end`)
      window.location.href = `intent://${deepLink}#Intent;scheme=https;package=com.nextbank.ncbportal;end`;
    }
  }, [auto, deepLink]);


  const href = useMemo(() => {
    if (isIOS) {
      return `https://${deepLink}&invalid=1`;
    }

    if (isAndroid) {
      const fallbackUrl = encodeURIComponent(`https://${deepLink}&invalid=1`);
      return `intent://${deepLink}#Intent;scheme=https;package=com.nextbank.ncbportal;S.browser_fallback_url=${fallbackUrl};end`;
    }

    return `https://${deepLink}&invalid=1`;
  }, [isAndroid, isIOS, deepLink]);
  
  return <div>
    {invalid === '1' || deep !== '1' ? (
      <div>
        App下載頁面
       </div>
      ) : (
        <div
        style={{
          width: '100%',
          padding: '60px',
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a
          href={href}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px 30px',
            background: 'yellow',
            height: '100px',
            textDecoration: 'none',
          }}
        >
          開啟app
        </a>
      </div>
      )}
  </div>
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { domain } = context.query;
  return {
    props: {
      domain: domain || null,
    },
  };
};

export default App;
