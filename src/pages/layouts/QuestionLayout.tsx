import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const QuestionLayout: FC = function () {
  return (
    <>
      <p>Question Layout</p>
      <main>
        {/* 相当于插槽 */}
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default QuestionLayout;
