import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Haru Camping</title>
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
      <h1>안녕하세요~~~</h1>
    </>
  );
};

export default Home;
