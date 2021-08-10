import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAunthenticated } from "../../backend/Auth";
import { getAllCategories } from "../../backend/Categories";
import { getAllProduct } from "../../backend/Product";
import AdminDashboard from "../AdminDashboard";

function ManageProduct() {
  const [product, setProduct] = useState([]);
  const user = isAunthenticated();
  useEffect(() => {
    getAllProduct(user.token)
      .then((resp) => {
        setProduct(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showData = () => {
    return product.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{prod.name}</td>
          <td>{prod.description}</td>
           <td>{prod.quantity}</td>
            <td>{prod.price}</td>
             <td>{prod.createdBy}</td>
          <td>
            {" "}
            <Link to={`updateProduct/${prod.id}`}>
              <Button>Update</Button>
            </Link>
           
 <Link to={`deleteProduct/${prod.id}`}>
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
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
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

export default ManageProduct;
