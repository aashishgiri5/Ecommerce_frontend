import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { createCategory, isAunthenticated } from "../../backend/Auth";
import CustomSpinner from "../../reusable/CustomSpinner";
import ErrorOrSuccess from "../../reusable/ErrorOrSuccess";
import AdminDashboard from "../AdminDashboard";

function CreateCat() {
  const [info, setInfo] = useState({
    type: "",
    
  });


  const [resp, setResp] = useState({
    error: "",
    message: "",
    loading: false,
  });

  const { error, message, loading } = resp;

  const { type } = info;

  const isLoggedIn= isAunthenticated();

  const handleChange = (name) => (e) => {
    setInfo({ ...info, [name]: e.target.value });
  };

  const handleClick = () => {
    setResp({ ...resp, loading: true, message: "", error: "" });
    createCategory(info,isLoggedIn)
      .then((res) => {
        if (res.status === "OK" || res.status === 200) {
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
                    placeholder="Enter the type of product"
                    onChange={handleChange("type")}
                  />
                  {/* {handleChange("firstName")} */}
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

export default CreateCat;
