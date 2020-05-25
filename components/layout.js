import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>KVGE</title>
    </Head>
      {props.children}
  </div>
);

export default Layout;