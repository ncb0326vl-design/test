export default function TestClick() {
  return (
    <>
    <div style={{ padding: '2rem' }}>
      <h1>Test Click Page</h1>
      <a
        href="https://www.nextbank.com.tw/app"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Go to Next Bank App
      </a>
     
    </div>
    <div style={{ padding: '2rem' }}>
      <a
          href={`intent://www.nextbank.com.tw/app#Intent;scheme=https;package=com.nextbank.ncbportal;S.browser_fallback_url=${encodeURIComponent("https://ebank.nextbank.com.tw/nextuseraccountloan")};end`}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Android Go to Next Bank App
      </a>
    </div>
    </>
  );
}
