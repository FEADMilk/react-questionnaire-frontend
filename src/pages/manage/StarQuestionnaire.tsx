import React, { FC, useState } from "react";
import styles from "./common.module.scss";
import QuestionsCard, { QuestionsCardProps } from "../../components/QuestionsCard";
import { Empty, Typography } from "antd";
import { useTitle } from "ahooks";

const { Title } = Typography;

const StarQuestionnaire: FC = function () {
  useTitle("聿森问卷 | 星标问卷");
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

  const handleClickStar = (_id: string) => {
    setQuestionsList(
      questionsList.map(item => {
        if (item._id === _id) {
          return {
            ...item,
            isStar: !item.isStar,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3} className={styles.left}>
          星标问卷
        </Title>
        <div className={styles.right}>搜索栏</div>
      </header>
      <main className={styles.main}>
        {questionsList.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"></Empty>
        )}
        {questionsList.length > 0 &&
          questionsList.map(item => {
            return <QuestionsCard key={item._id} {...item} onClickStar={handleClickStar} />;
          })}
      </main>
      <footer className={styles.footer}>分页[]</footer>
    </div>
  );
};

export default StarQuestionnaire;
