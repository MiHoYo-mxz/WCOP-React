import { memo } from "react";

// 首页文章组件
export default memo(function ArticleCard({ bgImage }: { bgImage: string }) {
  return (
    // 文章模块
    <div className="card max-w-5xl max-h-96 lg:card-side glass shadow-xl ml-6 mb-6">
      {/* 文章封面 */}
      <figure className="max-w-lg">
        <img src={bgImage} alt="Album" />
      </figure>
      {/* 文章大概内容 */}
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
});
