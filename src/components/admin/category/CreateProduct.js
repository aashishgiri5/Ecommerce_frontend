import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { isAunthenticated } from "../../backend/Auth";
import { getAllCategories } from "../../backend/Categories";
import CustomSpinner from "../../reusable/CustomSpinner";
import ErrorOrSuccess from "../../reusable/ErrorOrSuccess";
import AdminDashboard from "../AdminDashboard";
import {createProduct} from "../../backend/Product"




function CreateProduct() {
  const [info, setInfo] = useState({
    name:"",
    description:"",
    quantity:0,
    price:0.00,
    createdBy:"",
    category:""

  });

  const [cat,setCat]=useState([])

 






  const [resp, setResp] = useState({
    error: "",
    message: "",
    loading: false,
  });

  const { error, message, loading } = resp;

  const {createdBy} = info;

  const isLoggedIn= isAunthenticated();
const preload=()=>{
    getAllCategories(isLoggedIn.token).then(res=>{
      setCat(res.data);
      console.log(res)
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(() => {
   preload();
  },[])
  const handleChange = (name) => (e) => {
    let value=name==="image" ? e.target.files[0]:e.target.value;
    setInfo({ ...info, [name]: value});
  };

  const handleClick = () => {
    setInfo({...info,createdBy:isLoggedIn.email});
    setResp({ ...resp, loading: true, message: "", error: "" });
    createProduct(info,isLoggedIn.token)
      .then((res) =>{ 
        if (res.statusCode === "OK" || res.statusCode === 200) {
          setResp({ ...resp, loading: false, message: res.message, error: "" });
        } else {
          setResp({ ...resp, loading: false, message: "", error: res.error });
        }
      })
      .catch((err) => {
        console.error();
      });
  };

  

  return (
    <AdminDashboard>

          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the name of product"
                    onChange={handleChange("name")}
                  />
                  {/* {handleChange("firstName")} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the description of product"
                    onChange={handleChange("description")}
                  />
                  {/* {handleChange("firstName")} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the quantity of product"
                    onChange={handleChange("quantity")}
                  />
                  {/* {handleChange("firstName")} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the price of product"
                    onChange={handleChange("price")}
                  />
                  {/* {handleChange("firstName")} */}
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Created By</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the creator of product"
                    onChange={handleChange("createdBy")}
                  /> */}
                  {/* {handleChange("firstName")} */}
                {/* </Form.Group> */}

                  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload Product Image</Form.Label>
    <Form.Control type="file" onChange={handleChange("image")} />
  </Form.Group>




 <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Category</Form.Label>

                                  <Form.Select aria-label="Default select example" onChange={handleChange("category")} >
  <option>Select Category</option>
  {cat.map(cate=>{
    return(
      <option key={cate.id} value={cate.type}>{cate.type} </option>
    )})}
  
</Form.Select>
              
                </Form.Group>

               

<Button variant="primary" type="button" onClick={handleClick}>
                  Submit
                </Button>

                
              </Form>



              <div style={{ textAlign: "center" }}>
                {loading && <CustomSpinner />}
                {message && (
                  <ErrorOrSuccess color="success" message={message} />
                )}
                {error && <ErrorOrSuccess color="danger" message={error} />}
              </div>
            </Col>
          </Row>
    </AdminDashboard>
  );
}

export default CreateProduct;
