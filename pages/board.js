import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import InputBox from "../components/Input";

const Board = () => {
  return (
    <>
      <Head>
        <title>게시판 | Haru Camping</title>
      </Head>

      <Header></Header>

      <div>게시판 입니다.</div>
      <InputBox></InputBox>
    </>
  );
};

export default Board;
