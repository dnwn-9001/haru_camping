import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Switch } from "antd";

const Header = ({ children }) => {
  return (
    <div>
      <div>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div>
        <Link href="/">
          <a>하루캠핑</a>
        </Link>
        <Link href="/board">
          <a>게시판</a>
        </Link>
        <Link href="/profile">
          <a>마이페이지</a>
        </Link>
      </div>

      <Avatar
        size={64}
        icon={<UserOutlined />}
        style={{
          backgroundColor: "#87d068",
        }}
      />

      {children}
    </div>
  );
};

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
