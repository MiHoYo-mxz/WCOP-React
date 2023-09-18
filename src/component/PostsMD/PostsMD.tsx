import { memo, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Prism from "prismjs"; // 代码高亮模块
import { AboutMeCardwrapper } from "./AboutMeCss";
import "prismjs/themes/prism-tomorrow.css"; // choose your theme from Prism themes
import "github-markdown-css";

export default memo(function PostsMD() {
  let page = "hexo博客初步搭建总结.md";
  let Content = require(`@/mdfile/${page}`).default;
  console.log(useLocation);
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
