import React, { useRef, useState } from 'react'
import { Row, Container, Col, Form, Button } from 'react-bootstrap'

export default function Login() {
  const [myName, setmyName] = useState("");
  const inputName = useRef("");

  return (
    <>
      {/* <Container>
        <Form.Group>
          <Form.Label>My name is <span>{myName}</span> </Form.Label>
          <Form.Control type="text" onChange={e => setmyName(e.target.value)}></Form.Control>
        </Form.Group>
        Login
      </Container> */}

      <Container className="my-5">
        <Row>
          <Col>
            {myName}
            <Form.Group>
              <Form.Control type="text" onChange={e => inputName.current = e.target.value}></Form.Control>
              <Button variant="primary" className="my-2" onClick={() => setmyName(inputName.current)}>Login</Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  )
}
