// querySelector는 element의 자식을 탐색하여 첫번째로 해당되는 것을 가져온다.
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  // 삼항연산자 Python에서도 있었던 문법인데 여기서도 간략히 쓸 수 있다.
  // (if)? return : else
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();

  // setInterval(function, 밀리세컨드) 정한 시간 간격마다 함수를 실행해준다.
  setInterval(getTime, 1000);
}

init();
