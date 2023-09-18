import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomeView = lazy(() => import("../views/HomeView/HomeView")); // 首页
const AboutMe = lazy(() => import("../views/AboutMe/AboutMe")); // 关于页

export default function RouterIndex() {
  return (
    <Routes>
      {/* 首页 */}
      <Route
        path="/"
        element={
          <Suspense fallback={<>...</>}>
            <HomeView />
          </Suspense>
        }></Route>
      {/* 关于页 */}
      <Route
        path="/about"
        element={
          <Suspense fallback={<>...</>}>
            <AboutMe></AboutMe>
          </Suspense>
        }></Route>
    </Routes>
  );
}
