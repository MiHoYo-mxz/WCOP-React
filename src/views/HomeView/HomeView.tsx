import "./HomeView.scss";
import React, { memo, useState } from "react";
import CoverTitle from "../../component/CoverTitle/CoverTitle";
import MyCard from "../../component/MyCard/MyCard";
import ArticleCard from "../../component/ArticleCard/ArticleCard";
import { imgArrAdd } from "../../hooks/imgArrAdd";

export default memo(function HomeView() {
  // 背景图数组（子组件封面图）
  const [imgArr] = useState(imgArrAdd);
  return (
    // 博客核心滚动区域
    <div className="home absolute top-0 z-40">
      {/* 博客封面 */}
      <div className="coverArea relative h-screen">
        {/* 封面内容 */}
        <CoverTitle></CoverTitle>
      </div>
      {/* 博客内容区 */}
      <div className="main w-8/12 translate-x-1/4 flex justify-between">
        {/* 个人卡片 */}
        <MyCard></MyCard>
        <div className="ArticleCardArea flex flex-col">
          {/* 首页文章展示列表 */}
          {imgArr.map((item, index) => (
            <React.Fragment key={index}>
              <ArticleCard bgImage={item}></ArticleCard>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});
