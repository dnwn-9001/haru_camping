import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
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
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
