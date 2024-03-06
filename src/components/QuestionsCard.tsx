import React, { FC } from "react";
import styles from "./QuestionsCard.module.scss";
import { Button, Divider, Popconfirm, Space, Tag, Modal } from "antd";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

export type QuestionsCardProps = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  onClickStar?: (_id: string) => void;
};

const QuestionsCard: FC<QuestionsCardProps> = function (props) {
  const navigate = useNavigate();

  // 处理复制问卷
  const handleCopy = () => {
    // 执行复制
    navigator.clipboard.writeText(props._id);
  };

  // 处理删除问卷
  const handleDelete = () => {
    Modal.confirm({
      title: "确认删除该问卷？",
      okText: "确认",
      cancelText: "取消",
      icon: <DeleteOutlined />,
      onOk: () => {
        console.log("delete");
      },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link
            className={styles.left}
            to={
              props.isPublished ? `/question/statistic/${props._id}` : `/question/edit/${props._id}`
            }
          >
            <Space>
              {props.isStar && <StarOutlined style={{ color: "red" }} />}
              {props.title}
            </Space>
          </Link>
          <Space className={styles.right}>
            <Tag color={props.isPublished ? "green" : "red"}>
              {props.isPublished ? "已发布" : "未发布"}
            </Tag>
            <span>答卷:{props.answerCount} Pcs</span>
            <span>{props.createAt}</span>
          </Space>
        </header>
        <Divider style={{ margin: 0 }}></Divider>
        <footer className={styles.footer}>
          <Space size="small" className={styles["button-container--left"]}>
            <Button
              className={styles["text-color--primary"]}
              type="text"
              icon={<EditOutlined />}
              onClick={() => navigate(`/manage/edit/${props._id}`)}
            >
              编辑问卷
            </Button>
            <Button
              className={styles["text-color--third"]}
              type="text"
              icon={<LineChartOutlined />}
            >
              数据统计
            </Button>
          </Space>
          <Space size="small" className={styles["button-container--right"]}>
            <Button
              className={styles["text-color--secondary"]}
              type="text"
              style={{ color: props.isStar ? "blue" : "" }}
              icon={<StarOutlined style={{ color: props.isStar ? "blue" : "" }} />}
              onClick={() => props.onClickStar?.(props._id)}
            >
              {props.isStar ? "取消星标" : "设为星标"}
            </Button>
            <Popconfirm
              title="请问是否复制该问卷?"
              cancelText="取消"
              okText="确定"
              onConfirm={handleCopy}
            >
              <Button
                className={styles["text-color--secondary"]}
                type="text"
                icon={<CopyOutlined />}
              >
                复制
              </Button>
            </Popconfirm>
            <Button
              className={styles["text-color--secondary"]}
              type="text"
              icon={<DeleteOutlined />}
              onClick={handleDelete}
            >
              删除
            </Button>
          </Space>
        </footer>
      </div>
    </>
  );
};

export default QuestionsCard;
