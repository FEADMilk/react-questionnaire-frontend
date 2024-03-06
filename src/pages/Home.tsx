import React, { FC, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { MANAGE_LIST_PATHNAME } from "../router";
import styles from "./Home.module.scss";

import "../_mock/index";
import axios from "axios";

const { Title, Paragraph } = Typography;

const Home: FC = function () {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/test").then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title level={2}>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到问卷 980 份</Paragraph>
        <div>
          <Button type="primary" onClick={() => navigate(MANAGE_LIST_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
