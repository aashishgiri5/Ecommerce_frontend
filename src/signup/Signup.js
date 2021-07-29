import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { createUser } from '../components/backend/Auth';


function Signup() {

    const[info,setInfo]=useState({
            firstName: "",
            lastName:"",
            email:"",
            password:""
        });
    const {firstName,lastName, email,password}=info;

    const handlefirstName=e=>{
        setInfo({...info,firstName:e.target.value});
    }

      const handlelastName=e=>{
        setInfo({...info,lastName:e.target.value});
    }

      const handleemail=e=>{
        setInfo({...info,email:e.target.value});
    }

      const handlepassword=e=>{
        setInfo({...info,password:e.target.value});
    }

    const handleChange =(name)=>e=>{
        setInfo({...info,[name]:e.target.value});
    }

    const handleClick=()=>
    {
        
        createUser(info);
    }

    

    
    return (
        <Container>
                 <Row>
    <Col md={{ span: 6, offset: 3 }}>

        <Form>
 <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="firstName" onChange={handlefirstName} />
    {/* {handleChange("firstName")} */}
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="lastName" onChange={handlelastName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleemail} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlepassword}/>
  </Form.Group>

  <Button variant="primary" type="button" onClick={handleClick}>
    Submit
  </Button>
</Form>
    
    </Col>
  </Row>
        </Container>
   
     
    )
}

export default Signup
