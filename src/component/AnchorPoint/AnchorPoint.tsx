import { memo } from "react";
import { AnchorPointWrapper } from "./AnchorPointCss";

interface propsType {
  toMainArea: () => void;
}

export default memo(function AnchorPoint({ toMainArea }: propsType) {
  // 锚点跳转
  const toMain = () => {
    toMainArea();
  };

  return (
    // 首页锚点跳转
    <AnchorPointWrapper className="absolute left-2/4 bottom-0" onClick={toMain}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-12 h-12">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </AnchorPointWrapper>
  );
});
