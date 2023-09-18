var index = 0; //每句话字数的index
var huaindex = 0; //每句话的index
let data = [
  "如果你找不到一个坚持下去的理由 那就找一个重新开始的理由",
  "Sometimes, all we need is a quiet heart",
  "星光不问赶路人, 时光不负追梦人",
];
let timerone = null;
let timerclear = null;

export function textAnimate() {
  timerinit(huaindex);
  //开始打字
  function timerinit() {
    timerone = setInterval(() => {
      if (add(data[huaindex]) > data[huaindex].length) {
        clearInterval(timerone);

        //清除文字
        timerclear = setInterval(() => {
          if (clearadd(data[huaindex]) < 0) {
            clearInterval(timerclear);
            huaindex++;
            //下一句
            if (huaindex < data.length) {
              timerinit(huaindex);
            }

            if (huaindex === data.length) {
              huaindex = 0;
              //重头开始
              setTimeout(() => {
                timerinit(huaindex);
              }, 3000);
            }
          }
        }, 100);
      }
    }, 100);
  }
  //打字
  function add(data) {
    document.getElementById("subTitle").innerText = data.substring(0, index++);
    return index;
  }
  //清除
  function clearadd(data) {
    document.getElementById("subTitle").innerText = data.substring(0, index--);
    return index;
  }
}

export function clearTime() {
  clearInterval(timerone);
  clearInterval(timerclear);
}
