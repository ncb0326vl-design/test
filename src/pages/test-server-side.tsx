import { GetServerSideProps } from 'next';

export default function TestServerSide() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://www.nextbank.com.tw/app',
      permanent: false,
    },
  };
};
