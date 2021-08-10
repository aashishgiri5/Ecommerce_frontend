import React, { Children } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminDashboard({ children }) {
  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <div className="admin">
            <div className="admin__sidebar">
              <ListGroup>
                <ListGroup.Item variant="success">
                  <Link to="/createCat">Create Category</Link>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  <Link to="/manageCat">Manage Category</Link>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  <Link to="/createProduct">Create Product</Link>
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  <Link to="/manageProduct">Manage Product</Link>
                </ListGroup.Item>
             
             
              </ListGroup>
            </div>
            <div className="admin__main">{children}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;

