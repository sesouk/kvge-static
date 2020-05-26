import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>KVGE</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
      {props.children}
  </div>
);

export default Layout;