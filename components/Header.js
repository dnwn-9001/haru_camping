import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Switch, Row, Col } from "antd";

const Header = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Row>
        <Col
          xs={2}
          md={2}
          style={{
            margin: "auto",
            paddingLeft: "10px",
          }}
        >
          <div>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </Col>

        <Col
          xs={20}
          md={20}
          style={{
            marginTop: "14px",
            textAlign: "center",
          }}
        >
          <div>
            {/* <Menu items={items} onClick={movePage} /> */}
            <h1>하루캠핑 로고</h1>
          </div>
        </Col>

        <Col
          xs={2}
          md={2}
          style={{
            margin: "auto",
            textAlign: "right",
            paddingRight: "10px",
          }}
        >
          <Link href="/profile">
            <a>
              <Avatar
                icon={<UserOutlined />}
                style={{
                  backgroundColor: "#87d068",
                }}
              />
            </a>
          </Link>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col xs={24} md={6} />
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6} />
      </Row>
    </div>
  );
};

// const movePage = ({ key }) => {
//   console.log(key);
//   return (
//     <Link href={key}>
//       <a></a>
//     </Link>
//   );
// };

// const items = [
//   { label: "하루캠핑", key: "/" },
//   { label: "게시판", key: "/board" },
//   { label: "마이페이지", key: "/profile" },
// ];

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
