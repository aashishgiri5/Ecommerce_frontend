import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { authenticate, loginUser } from '../components/backend/Auth';
import ErrorOrSuccess from '../components/reusable/ErrorOrSuccess';


function Login() {
    const[info,setInfo]=useState({
            email:"",
            password:""
        });

    const[res,setRes]=useState({
loading:false,
didRedirect:false,
error:""
    });

    const{email,password}=info;
    const{loading,didRedirect,error}=res;

    const userRedirect=()=>
    {
      return <Redirect to="/user/dashboard"/>    }

  const handleChange =(name)=>e=>{
        setInfo({...info,[name]:e.target.value});
    }

    const handleClick= ()=>{
setRes({...res,loading:true})
loginUser(info).then(resp=>{
  console.log(resp);
  if(resp.statusCode===200||resp.statusCode==="OK")
  authenticate(resp,()=>{
    setRes({...res,didRedirect:true,loading:false})
  })
  else{
     setRes({...res,didRedirect:false,loading:false,error:resp.error})
  }
})

    }

    return (


      <Container className="login">
                 <Row>
    <Col md={{ span: 6, offset: 3 }}>
     
      {didRedirect &&(userRedirect())}

        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleChange("email")} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange("password")}/>
  </Form.Group>

  <Button variant="primary" type="button" onClick={handleClick}>
    Submit
  </Button>
</Form>
<div style={{textAlign:'center'}}>
        
        
      {error&&<ErrorOrSuccess color='danger' message={error}/>}
      </div>
    
    </Col>
  </Row>
        </Container>
    )
}

export default Login
