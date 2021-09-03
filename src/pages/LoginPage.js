import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginPage = (props) => {
  const [loginUser, setLoginUser] = useState({
    username: '',
    password: '',
  });

  const login = (e) => {
    e.preventDefault(); // submit 액션 차단
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(loginUser),
    })
      .then((res) => {
        //console.log(res.headers.get('Authorization'));
        let jwtToken = res.headers.get('Authorization');
        localStorage.setItem('Authorization', jwtToken);
        return res.text();
      })
      .then((res) => {
        if (res === 'ok') {
          console.log('통신성공');
        } else {
          console.log(res);
        }
      });
  };

  const changeInput = (e) => {
    console.log(e.target.value);

    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  console.log(loginUser);
  return (
    <Form className="container">
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Enter Username"
          onChange={changeInput}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={changeInput}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={login}>
        로그인
      </Button>
    </Form>
  );
};

export default LoginPage;
