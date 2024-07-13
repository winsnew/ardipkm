import Navbar from "../navbar";
import Head from "next/head";

const Main = ({children}) => {
  return (
    <>
      <Head>
        <title>Kamus Digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kamus Digital Projects" />
        <meta name="author" content="Kamus Digital" />
      </Head>
      <div className="bg-hero">
        <Navbar  />
        {children}
      </div>
    </>
  );
};

export default Main;
