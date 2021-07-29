import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function login() {
    const[info,setInfo]=useState({
            email:"",
            password:""
        });
  const handleChange =(name)=>e=>{
        setInfo({...info,[name]:e.target.value});
    }

    return (
      <Container>
                 <Row>
    <Col md={{ span: 6, offset: 3 }}>

        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"/>
  </Form.Group>

  <Button variant="primary" type="button" >
    Submit
  </Button>
</Form>
    
    </Col>
  </Row>
        </Container>
    )
}

export default login
