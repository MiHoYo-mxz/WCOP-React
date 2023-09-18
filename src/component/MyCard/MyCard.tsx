import { memo } from "react";
import myCover from "../../assets/img/EqEgKAXC_400x400.png";

// 个人卡片
export default memo(function MyCard() {
  return (
    <div className="card h-1/3 glass">
      <figure>
        <img className="cardCover" src={myCover} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          Rinkuru
        </h2>
        <p className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          蒸膜，你不服气？
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">more</button>
        </div>
      </div>
    </div>
  );
});
