import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import InputSearchBox from "../components/Input";

const Board = () => {
  return (
    <>
      <Head>
        <title>게시판 | Haru Camping</title>
      </Head>

      <AppLayout></AppLayout>

      <div>게시판 입니다.</div>
      <InputSearchBox></InputSearchBox>
    </>
  );
};

export default Board;
