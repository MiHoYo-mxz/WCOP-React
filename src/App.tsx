import { AppWrapper } from "./AppCss"; // 该组件样式
import { useState, memo, useEffect, Fragment } from "react";
import RouterIndex from "./router/RouterIndex";
import { CSSTransition } from "react-transition-group"; // 动画组件
import NavBar from "./component/NavBar/NavBar";
import { imgArrAdd } from "./hooks/imgArrAdd"; // 背景图数组

export default memo(function App() {
  const [theme, setTheme] = useState("");
  // 改变全局主题
  const changeTheme = (themeType: string) => {
    setTheme(themeType);
  };

  // 背景图数组
  const [imgArr] = useState(imgArrAdd);
  let [imgNum, setNum] = useState(0);
  useEffect(() => {
    // 定时切换背景
    setInterval(() => {
      setNum((imgNum) => {
        return imgArr.length - 1 === imgNum ? 0 : imgNum + 1;
      });
    }, 10000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppWrapper className="App" data-theme={theme}>
      {/* 背景图遍历 */}
      {imgArr.map((item, index) => (
        <Fragment key={index}>
          {/* 使用动画组件实现背景图渐变切换 */}
          <CSSTransition
            classNames="bgImg"
            appear={true}
            in={imgNum === index}
            timeout={6000}
            unmountOnExit={true}
            key={index}>
            <img className="bgImage" src={item} alt="" />
          </CSSTransition>
        </Fragment>
      ))}
      {/* 顶部导航栏组件 */}
      <NavBar changeTheme={changeTheme}></NavBar>
      {/* 滚动区域 */}
      <div className="contentView w-screen h-screen absolute">
        <RouterIndex></RouterIndex>
      </div>
    </AppWrapper>
  );
});
