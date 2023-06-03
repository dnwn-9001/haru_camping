import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoginTitle = styled.h1`
  text-align: center;
  margin: 100px 0 50px 0;
`;

const InputWrapper = styled.div`
  margin: auto;
  margin-bottom: 20px;
  width: 300px;
`;

const LoginButton = styled(Button)`
  margin-right: 10px;
  background-color: rgba(50, 92, 62, 0.5);
  border: none;
  width: 300px;
`;

const SignupBtn = styled.a`
  color: grey;
  padding-top: 15px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePwd = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <>
      <LoginTitle>로그인</LoginTitle>
      <Form onFinish={onSubmitForm}>
        <InputWrapper>
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            placeholder="아이디를 입력해주세요."
            size="large"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input.Password
            name="user-password"
            value={password}
            onChange={onChangePwd}
            placeholder="비밀번호를 입력해주세요."
            size="large"
            required
          />
        </InputWrapper>
        <div>
          <LoginButton type="primary" htmlType="submit" loading={false}>
            로그인
          </LoginButton>
          <Link href="/signup">
            <SignupBtn>회원가입</SignupBtn>
          </Link>
        </div>
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.elementType.isRequired,
};

export default LoginForm;
