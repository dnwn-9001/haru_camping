import React from "react";
import Header from "../components/Header";
import Head from "next/head";

const Board = () => {
  return (
    <>
      <Head>
        <title>게시판 | Haru Camping</title>
      </Head>

      <Header>
        <div>게시판 입니다.</div>
      </Header>
    </>
  );
};

export default Board;
