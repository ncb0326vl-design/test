import { GetServerSideProps } from 'next';

export default function TestServerSide() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `intent://www.nextbank.com.tw/app#Intent;scheme=https;package=com.nextbank.ncbportal;S.browser_fallback_url=${encodeURIComponent("https://www.nextbank.com.tw/app")};end`,
      permanent: false,
    },
  };
};
