// mockjs 只能劫持 XMLHttpRequest，无法劫持 fetch
import Mock from "mockjs";

Mock.mock("/api/test", "get", () => {
  return {
    errno: 0,
    msg: "ok",
    data: {
      name: "聿森",
      age: 18,
    },
  };
});
