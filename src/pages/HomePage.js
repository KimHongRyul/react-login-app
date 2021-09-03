import React from 'react';
import { useEffect, useState } from 'react';

// 리엑트 클래스 컴포넌트 기반 (x)
// 리엑트 hooks => 함수형 기반(0) => useXX 함수 사용 가능
const HomePage = () => {
  const [user, setUser] = useState('홍길동');

  // 생성자(조건이 필요한 생성자)
  useEffect(() => {
    fetch('http://localhost:8080/user/1') // then은 json을 파싱함
      .then((res) => res.json())
      .then((res) => {
        console.log("통신성공");
        console.log(res);
        console.log("dasd");
        setUser(res);
      })
      .catch((error) => { // then 내부에서 실패하면 뜸.(파싱 실패시)
        console.log(error);
      });
  }, []);

  return (
    <div>
      <hr />
      <h1>Home Page</h1>
      <h3>접속한 유저이름 : {user.username}</h3>
      <hr />
    </div>
  );
};

export default HomePage;
