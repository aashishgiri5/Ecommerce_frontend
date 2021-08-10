import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {isAunthenticated } from "../../backend/Auth";
import { updateCategoryById } from "../../backend/Categories";
import CustomSpinner from "../../reusable/CustomSpinner";
import ErrorOrSuccess from "../../reusable/ErrorOrSuccess";
import AdminDashboard from "../AdminDashboard";

function UpdateCat() {
  const{catId}=useParams()
  const [info, setInfo] = useState({
    type: "",
    createdBy:""
    
  });


  const [resp, setResp] = useState({
    error: "",
    message: "",
    loading: false,
  });

  const { error, message, loading } = resp;

  const { type,createdBy } = info;

  const isLoggedIn= isAunthenticated();

  const handleChange = (name) => (e) => {
    setInfo({ ...info, [name]: e.target.value ,createdBy:isAunthenticated.email});
  };

  const handleClick = () => {
    setResp({ ...resp, loading: true, message: "", error: "" });
    updateCategoryById(isLoggedIn.token,catId,info)
      .then((res) => {
        console.log(res)
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
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the updated type of product"
                    onChange={handleChange("type")}
                  />
                  {/* {handleChange("firstName")} */}
                </Form.Group>

               

                <Button variant="primary" type="button" onClick={handleClick}>
                  Submit
                </Button>
              </Form>

              <div style={{ textAlign: "center" }}>
                {loading && <CustomSpinner/>}
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

export default UpdateCat;
