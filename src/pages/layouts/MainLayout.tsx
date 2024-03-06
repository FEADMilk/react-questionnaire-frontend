import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./MainLayout.module.scss";
import Logo from "../../components/Logo";
import UserInfo from "../../components/UserInfo";

const { Header, Footer, Content } = Layout;

const MainLayout: FC = function () {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>
        <div className={styles.right}>
          <UserInfo></UserInfo>
        </div>
      </Header>
      <Content className={styles.main}>
        {/* 相当于插槽 */}
        <Outlet></Outlet>
      </Content>
      <Footer className={styles.footer}>MainLayout Footer</Footer>
    </Layout>
  );
};
export default MainLayout;
