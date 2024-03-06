import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Space, Typography } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import styles from "./Register.module.scss";
import { REGISTER_PATHNAME } from "../router";
import { USER_USERNAME_KEY, USER_PASSWORD_KEY } from "../constant";

const { Title } = Typography;

const handleRememberUser = (username: string, password: string) => {
  localStorage.setItem(USER_USERNAME_KEY, username);
  localStorage.setItem(USER_PASSWORD_KEY, password);
};

const deleteUserInfoStorage = () => {
  localStorage.removeItem(USER_USERNAME_KEY);
  localStorage.removeItem(USER_PASSWORD_KEY);
};

const getRememberUser = () => {
  return {
    username: localStorage.getItem(USER_USERNAME_KEY),
    password: localStorage.getItem(USER_PASSWORD_KEY),
  };
};

const Login: FC = function () {
  const [form] = Form.useForm(); // 第三方Hooks

  useEffect(() => {
    const { username, password } = getRememberUser();
    console.log(username, password);

    form.setFieldsValue({ username, password });
  }, []);

  const onFinish = (values: any) => {
    const { username, password, rememberMe } = values || {};
    console.log(values);

    if (rememberMe) {
      handleRememberUser(username, password);
    } else {
      deleteUserInfoStorage();
    }
  };

  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <LoginOutlined></LoginOutlined>
        </Title>
        <Title level={2}>登录</Title>
      </Space>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          initialValues={{ rememberMe: true }}
          form={form}
        >
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
          <Form.Item wrapperCol={{ offset: 6, span: 24 }} name="rememberMe" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 24 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME} replace>
                注册新用户
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
