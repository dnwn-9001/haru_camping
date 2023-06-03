import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import Profile from "./profile";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Head>
        <title>로그인 | Haru Camping</title>
      </Head>
      <AppLayout>
        {isLoggedIn ? (
          <Profile setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </AppLayout>
    </>
  );
};

export default Login;
