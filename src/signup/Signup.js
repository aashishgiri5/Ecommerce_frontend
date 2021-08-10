import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { createUser } from '../components/backend/Auth';
import '../App.css';
import CustomSpinner from '../components/reusable/CustomSpinner';
import ErrorOrSuccess from '../components/reusable/ErrorOrSuccess';


function Signup() {

    const[info,setInfo]=useState({
            first_name: "",
            last_name:"",
            email:"",
            password:""
        });

        const[resp,setResp]=useState(
          {
            error:"",
            message:"",
            loading:false
          }
        )
        const {error,message,loading}=resp;

    const {first_name,last_name, email,password}=info;

    const handlefirstName=e=>{
        setInfo({...info,first_name:e.target.value});
    }

      const handlelastName=e=>{
        setInfo({...info,last_name:e.target.value});
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
         setResp({...resp,loading:true,message:"",error:""});
        createUser(info).then(res=>{
          if(res.statusCode==="OK"|| res.statusCode===200){
           setResp({...resp,loading:false,message:res.message,error:""})
          
        }else{
          setResp({...resp,loading:false,message:"",error:res.error})
        }


        }).catch(err=>{console.error()});
    }

    console.log(info)

    
    return (
      // <div className="signup_top">
        <Container className="signup_top">
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

  <div style={{textAlign:'center'}}>
        {loading&&<CustomSpinner/>}
        {message&&<ErrorOrSuccess color='success' message={message}/>}
      {error&&<ErrorOrSuccess color='danger' message={error}/>}
      </div>
    
    </Col>
  </Row>
        </Container>
   
    //  </div>
    )
}

export default Signup
