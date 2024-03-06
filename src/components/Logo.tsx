import React, { FC } from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo: FC = function () {
  return (
    <Link to="/" className={styles.container}>
      <img src="/src/assets/img/logo_yusenwenjuan.png" alt="logo" className={styles.logo}></img>
      <h3>聿森问卷</h3>
    </Link>
  );
};
export default Logo;
