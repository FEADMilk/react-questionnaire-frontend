import React, { FC, useState } from "react";
import styles from "./common.module.scss";
import QuestionsCard, { QuestionsCardProps } from "../../components/QuestionsCard";
import { Button, Empty, Modal, Space, Table, Tag, Typography } from "antd";
import { useTitle } from "ahooks";

const { Title } = Typography;

const Trash: FC = function () {
  useTitle("聿森问卷 | 回收站");

  const tableColumns = [
    {
      // align: "center",
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      // align: "center",
      title: "是否发布",
      dataIndex: "isPublished",
      key: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="green">已发布</Tag> : <Tag color="red">未发布</Tag>;
      },
    },
    {
      // align: "center",
      title: "是否星标",
      dataIndex: "isStar",
      key: "isStar",
      render: (isStar: boolean) => {
        return isStar ? <Tag color="green">是</Tag> : <Tag color="red">否</Tag>;
      },
    },
    {
      // align: "center",
      title: "答卷人数",
      dataIndex: "answerCount",
      key: "answerCount",
    },
    {
      // align: "center",
      title: "创建时间",
      dataIndex: "createAt",
      key: "createAt",
    },
  ];

  const rawQuestionsList = [
    {
      _id: "1",
      title: "问卷1",
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createAt: "2022-12-12 12:12:12",
    },
    {
      _id: "2",
      title: "问卷2",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2022-12-12 12:12:12",
    },
    {
      _id: "3",
      title: "问卷3",
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createAt: "2022-12-12 12:12:12",
    },
  ];
  const [questionsList, setQuestionsList] = useState<QuestionsCardProps[]>(rawQuestionsList);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleDelete = () => {
    Modal.confirm({
      title: "是否永久删除被选中的问卷？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        console.log("delete");
      },
    });
  };

  const TableElem = (
    <>
      <Space>
        <Button disabled={selectedIds.length === 0} type="primary">
          恢复
        </Button>
        <Button disabled={selectedIds.length === 0} danger onClick={handleDelete}>
          彻底删除
        </Button>
      </Space>
      <Table
        dataSource={questionsList}
        columns={tableColumns}
        pagination={false}
        rowKey={row => row._id}
        rowSelection={{
          type: "checkbox",
          onChange(selectedRowKeys, _selectedRows) {
            setSelectedIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3} className={styles.left}>
          回收站
        </Title>
        <div className={styles.right}>搜索栏{selectedIds}</div>
      </header>
      <main className={styles.main}>
        {questionsList.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"></Empty>
        )}
        {questionsList.length > 0 && TableElem}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Trash;
