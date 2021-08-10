import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {isAunthenticated } from "../../backend/Auth";
import { deleteCategory, updateCategoryById } from "../../backend/Categories";
import CustomSpinner from "../../reusable/CustomSpinner";
import ErrorOrSuccess from "../../reusable/ErrorOrSuccess";
import AdminDashboard from "../AdminDashboard";

function DeleteCat() {
  const{catId}=useParams()
//   const [info, setInfo] = useState({
//     type: "",
   
    
//   });


  const [resp, setResp] = useState({
    error: "",
    message: "",
    loading: false,
  });

  const { error, message, loading } = resp;

//   const { type } = info;

  const isLoggedIn= isAunthenticated();



  const handleClick = () => {
    setResp({ ...resp, loading: true, message: "", error: "" });
    deleteCategory(catId,isLoggedIn.token)
      .then((res) => {
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

                <Button variant="primary" type="button" onClick={handleClick}>
                  Delete
                </Button>

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

export default DeleteCat;
