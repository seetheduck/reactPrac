import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Login = ({setAuthenticate}) => {
  const loginUser=(event)=>{
    event.preventDefault();
    setAuthenticate(true);
  }
  return (
    <Container>
      <div className='main-log'>
      <div className='login-main'>LOGIN</div>
      <div className='login-sub'>로그인 하시면 다양하고 특별한 혜택을 이용할 수 있습니다.</div>
      </div>
      <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="아이디" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="비밀번호" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="아이디 저장" />
      </Form.Group>
      <Button variant="dark" type="submit">
        일반 회원으로 로그인
      </Button>
      <Button variant="light" type="submit">
        바로 회원가입
      </Button>
    </Form>
    </Container>
  )
}

export default Login
