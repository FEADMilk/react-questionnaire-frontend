import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Space, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styles from "./Register.module.scss";
import { LOGIN_PATHNAME } from "../router";

const { Title } = Typography;
const Register: FC = function () {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <UserAddOutlined></UserAddOutlined>
        </Title>
        <Title level={2}>注册</Title>
      </Space>
      <div>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 24 }} onFinish={onFinish}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: "请输入用户名" },
              { type: "string", min: 5, max: 20, message: "用户名长度在5-20之间" },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: "用户名只能包含字母、数字、下划线",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "请再次输入密码" },
              ({ getFieldValue }) => ({
                validator: (_, value) => {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("两次输入密码不一致"));
                },
              }),
            ]}
          >
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item label="昵称" name="nickname">
            <Input></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 24 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATHNAME} replace>
                已有账号,去登录
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
