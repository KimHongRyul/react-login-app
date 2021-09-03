import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  //body, contentType, method
  // 자바스크립트 오브젝트 => JSON.parse(), JSON.stringify()
  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      <hr />
      <h1>유저 테이블</h1>
      {users.map((user) => (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{user.id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {user.username}님의 Card
              </Card.Subtitle>
              <Card.Text>email : {user.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
