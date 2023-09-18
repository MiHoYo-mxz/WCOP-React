import { Homewrapper } from "./HomeViewCss"; // 该组件样式
import React, { memo, useRef, useState } from "react";
import CoverTitle from "../../component/CoverTitle/CoverTitle";
import MyCard from "../../component/MyCard/MyCard";
import ArticleCard from "../../component/ArticleCard/ArticleCard";
import AnchorPoint from "../../component/AnchorPoint/AnchorPoint";
import { imgArrAdd } from "../../hooks/imgArrAdd"; // 背景图数组
const modulesFiles = require.context("@/mdfile/posts", true, /.md$/);

export default memo(function HomeView() {
  const postsArr = modulesFiles.keys().map((item) => {
    return item.slice(2, item.length - 3);
  });
  console.log(postsArr);

  // 背景图数组（子组件封面图）
  const [imgArr] = useState(imgArrAdd);

  // 锚点跳转
  const homeRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const toMainArea = () => {
    mainRef.current?.parentElement?.parentElement?.scroll({
      top: mainRef.current.offsetTop - 68,
      behavior: "smooth",
    });
  };

  return (
    // 博客核心滚动区域
    <Homewrapper className="home absolute top-0 z-40" ref={homeRef}>
      {/* 博客封面 */}
      <div className="coverArea relative h-screen">
        {/* 封面内容 */}
        <CoverTitle></CoverTitle>
        <AnchorPoint toMainArea={toMainArea}></AnchorPoint>
      </div>
      {/* 博客内容区 */}
      <div
        className="main translate-x-1/4 flex justify-between pt-7"
        ref={mainRef}>
        {/* 个人卡片 */}
        <MyCard></MyCard>
        <div className="ArticleCardArea flex flex-col">
          {/* 首页文章展示列表 */}
          {imgArr.map((item, index) => (
            <React.Fragment key={index}>
              <ArticleCard
                bgImage={item}
                postsTitle={postsArr[index]}></ArticleCard>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Homewrapper>
  );
});
