import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionsCard, { QuestionsCardProps } from "../../components/QuestionsCard";
import styles from "./common.module.scss";
import { Typography } from "antd";
import { useTitle } from "ahooks";

const { Title } = Typography;

const MineQuestionnaire: FC = function () {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  console.log("list search", searchParamsObject);
  useTitle("聿森问卷 | 我的问卷");

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
      isStar: false,
      answerCount: 10,
      createAt: "2022-12-12 12:12:12",
    },
    {
      _id: "3",
      title: "问卷3",
      isPublished: true,
      isStar: false,
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
          我的问卷
        </Title>
        <div className={styles.right}>搜索栏</div>
      </header>
      <main className={styles.main}>
        {questionsList.map(item => {
          return <QuestionsCard key={item._id} {...item} onClickStar={handleClickStar} />;
        })}
      </main>
      <footer className={styles.footer}>loadMore...上划加载更多...</footer>
    </div>
  );
};

export default MineQuestionnaire;
