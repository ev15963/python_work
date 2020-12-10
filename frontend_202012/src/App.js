import React, { useState, useEffect } from "react";
import "./App.css";
import customAxios from "./customAxios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import GridTest from "./GridTest";
import GridTest2 from "./GridTest2";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <Router>
      <div className="App">
        {isPC && <p>isPC</p>}
        {isTablet && <p>isTablet</p>}
        {isMobile && <p>isMobile</p>}

        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/users">사용자</Link>
            </li>
          </ul>
        </nav>

        {/** <switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  //ip 주소 변수 선언
  const [ip, setIp] = useState("");

  //ip 주소 값을 설정
  function callback(data) {
    setIp(data);
  }

  //첫번째 렌더릉을 다 마친 후 실행
  useEffect(() => {
    //클라이언트의 ip주소를 알아내는 백엔드ㄹ의 함수를 호출
    customAxios("/ip", callback);
  }, []);

  return (
    <header className="App-header">이 기기의 IP주소는 바로 {ip}입니다.</header>
  );
}

function About() {
  return (
    <div>
      <hr />
      <h2>
        소개 페이지
        <GridTest />
      </h2>
    </div>
  );
}

function Users() {
  return (
    <div>
      <hr />
      <h2>
        사용자 페이지
        <GridTest2 />
      </h2>
    </div>
  );
}

export default App;
