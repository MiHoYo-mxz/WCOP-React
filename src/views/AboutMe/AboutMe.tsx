import { memo, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Prism from "prismjs"; // 代码高亮模块
import { AboutMeCardwrapper } from "./AboutMeCss";
import { MDwrapper } from "../../assets/css/MdCss";
import "prismjs/themes/prism-tomorrow.css"; // choose your theme from Prism themes
import "github-markdown-css";
// import Content from "@/mdfile/hexo博客初步搭建总结.md";

export default memo(function AboutMe() {
  // 根据路由动态导入md文件
  let location = useLocation();
  let page = location.pathname;
  let Content = require(`@/mdfile/about${page}.md`).default;

  useEffect(() => {
    // 代码高亮
    Prism.highlightAll();
  }, []);

  return (
    // 关于页面显示区域
    <div className="about w-full pt-44 relative flex justify-center">
      {/* 文章卡片区域 */}
      <AboutMeCardwrapper className="card w-8/12 bg-base-100 shadow-xl absolute left-1/2">
        <div className="card-body">
          {/* markdown区域 */}
          <Suspense fallback={<>...</>}>
            <div className="markdown-body">
              <Content className="markdown-body"></Content>
            </div>
          </Suspense>
        </div>
      </AboutMeCardwrapper>
    </div>
  );
});
