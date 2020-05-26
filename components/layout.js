import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>KVGE</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"></link>
    </Head>
      {props.children}
  </div>
);

export default Layout;