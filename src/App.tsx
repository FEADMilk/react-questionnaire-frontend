// import "./App.scss";
import React from "react";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";
import "antd/dist/reset.css"; // 引入初始化样式

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
