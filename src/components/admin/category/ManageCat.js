import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAunthenticated } from "../../backend/Auth";
import { getAllCategories } from "../../backend/Categories";
import AdminDashboard from "../AdminDashboard";

function ManageCat() {
  const [category, setCategory] = useState([]);
  const user = isAunthenticated();
  useEffect(() => {
    getAllCategories(user.token)
      .then((resp) => {
        setCategory(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showData = () => {
    return category.map((cate, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{cate.type}</td>
          <td>{cate.createdBy}</td>
          <td>
            {" "}
            <Link to={`cateUpdate/${cate.id}`}>
              <Button>Update</Button>
            </Link>
            <Link to={`cateDelete/${cate.id}`}>
            <Button variant="danger" style={{ marginLeft: "25px" }}>
              Delete
            </Button>
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <AdminDashboard>
      <row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Created By</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {showData()}
            {/* {category.map((cate,index)=>(
<tr key={index}>
      <td>{index+1}</td>
      <td>{cate.type}</td>
      <td>{cate.createdBy}</td>   
    </tr>))} */}
          </tbody>
        </Table>
      </row>
    </AdminDashboard>
  );
}

export default ManageCat;
