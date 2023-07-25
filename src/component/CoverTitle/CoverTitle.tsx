import "./CoverTitle.scss";
import { useEffect, memo } from "react";
import { textAnimate } from "../../hooks/textAnimate";

// 如果你的函数组件在相同props下渲染出相同结果，你可以把它包裹在React.memo中来通过缓存渲染结果来实现性能优化。这意味着React会跳过组件渲染，而使用上次渲染结果。
export default memo(function CoverTitle() {
  useEffect(() => {
    textAnimate();
  }, []);
  return (
    // 封面title区域
    <div className="coverTitle w-full h-1/5 coverTitle absolute top-1/2 text-center flex flex-col justify-between z-40 opacity-80">
      <div>
        <span className="font-extrabold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          Hello World
        </span>
      </div>
      <div>
        <span
          id="subTitle"
          className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></span>
      </div>
    </div>
  );
});
