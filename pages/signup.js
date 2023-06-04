import React, { useState, useCallback } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Button, Form, Input, Space } from "antd";
import useInput from "../hooks/useInput";

const Signup = () => {
  const onSubmit = useCallback(() => {});

  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
  }, []);

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | Haru Camping</title>
        </Head>

        <Form
          onFinish={onSubmit}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="아이디"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={id} onChange={onChangeId} />
          </Form.Item>
          <Form.Item
            name="nickname"
            label="닉네임"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={nickname} onChange={onChangeNickname} />
          </Form.Item>
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={password} onChange={onChangePassword} />
          </Form.Item>
          <Form.Item
            name="passwordCheck"
            label="비밀번호 확인"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={passwordCheck} onChange={onChangePasswordCheck} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button htmlType="submit">제출하기</Button>
            </Space>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
