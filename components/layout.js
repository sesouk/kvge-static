import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>KVGE</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      {props.children}
  </div>
);

export default Layout;