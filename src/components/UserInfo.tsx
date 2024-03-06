import React, { FC } from "react";
import { Link } from "react-router-dom";

const UserInfo: FC = function () {
  return (
    <>
      <Link to="/login">登录</Link>
    </>
  );
};

export default UserInfo;
