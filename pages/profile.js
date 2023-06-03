import React, { useCallback } from "react";
import Head from "next/head";
import { Card, Button } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const AccountBox = styled(Card)`
  width: 800px;
  margin: auto;
  margin-top: 70px;
`;

const Profile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  });

  return (
    <>
      <Head>
        <title>내 프로필 | Haru Camping</title>
      </Head>
      <AccountBox
        title="계정 정보"
        extra={<Button onClick={onLogOut}>로그아웃</Button>}
        style={{
          width: 800,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </AccountBox>
    </>
  );
};

Profile.propTypes = {
  setIsLoggedIn: PropTypes.elementType.isRequired,
};

export default Profile;
