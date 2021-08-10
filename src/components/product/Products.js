import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { isAunthenticated } from '../backend/Auth';
import { getAllProduct } from '../backend/Product';

function Products() {
    const [products,setProducts]=useState([]);
    const user=isAunthenticated();
    const preload=()=>{
        getAllProduct(user.token).then(res=>{
            setProducts(res.data)
            console.log(res)
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{preload()},[])
    return (
        <Container fluid="md">

            <Row xs={1} md={2} className="g-4">
  {products.map((product) => (
    <Col>
      <Card className="product_card">
        <Card.Img variant="top" src={`images/${product.image}`} />
    
         <h1>{product.name}</h1>
          <Card.Text>
           {product.description}
          </Card.Text>
          <div className="product_price">
         <h1>${product.price}</h1>  
     <Button variant="outline-info">ADD TO CART</Button>{' '}
          </div>

      </Card>
    </Col>
  ))}
</Row>
            
       </Container>
    )
}

export default Products
