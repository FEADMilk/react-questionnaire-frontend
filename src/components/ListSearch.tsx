import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Input } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_KEY } from "../constant";
// import { useThrottleEffect } from "ahooks";

const { Search } = Input;

const ListSearch: FC = function () {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    const currentKeyword = searchParams.get(LIST_SEARCH_KEY) || "";
    setKeyword(currentKeyword);
  }, [searchParams]);

  const onSearch = (keyword: string) => {
    if (keyword) {
      navigate({
        pathname: pathname,
        search: `?${LIST_SEARCH_KEY}=${keyword}`,
      });
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    // useThrottleEffect(() => {}, [event.target.value], {
    //   wait: 500,
    // });
  };

  return (
    <>
      <Search
        placeholder="请输入搜索内容"
        value={keyword}
        allowClear
        size="large"
        style={{ width: "260px" }}
        onSearch={onSearch}
        onChange={onChange}
      />
    </>
  );
};

export default ListSearch;
