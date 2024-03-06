import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import { Button, Divider, Space } from "antd";
import { BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined } from "@ant-design/icons";

const ManageLayout: FC = function () {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("pathname", pathname);

  return (
    <div className={styles.container}>
      <header className={styles.left}>
        <p>ManageLayout Left</p>
        <Space direction="vertical" size="small">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Divider plain></Divider>
          <Button
            type={pathname.startsWith("/manage/list") ? "primary" : "default"}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => navigate("/manage/list")}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith("/manage/star") ? "primary" : "default"}
            size="large"
            icon={<StarOutlined />}
            onClick={() => navigate("/manage/star")}
          >
            星标问卷
          </Button>
          <Button
            style={{ width: "100%" }}
            type={pathname.startsWith("/manage/trash") ? "primary" : "default"}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => navigate("/manage/trash")}
          >
            回 收 站
          </Button>
        </Space>
      </header>
      <main className={styles.right}>
        {/* 相当于插槽 */}
        <Outlet></Outlet>
      </main>
    </div>
  );
};
export default ManageLayout;
