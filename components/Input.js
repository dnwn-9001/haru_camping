import React from "react";
import { Input } from "antd";

const InputBox = () => {
  return (
    <Input.Search
      placeholder="검색할 제품"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  );
};

const onSearch = (value) => console.log(value);

export default InputBox;
