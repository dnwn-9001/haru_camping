import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>로그인 | Haru Camping</title>
      </Head>
      <Header>
        <LoginForm />
      </Header>
    </>
  );
};

export default Login;
