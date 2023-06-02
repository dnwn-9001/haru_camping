import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Haru Camping</title>
      </Head>
      <Header>
        <div>내 프로필</div>
      </Header>
    </>
  );
};

export default Profile;
