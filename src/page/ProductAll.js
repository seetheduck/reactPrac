import React, { useEffect, useState } from 'react'
import NewArrival from '../component/NewArrival';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q') || ""
    console.log(searchQuery)
    let url = `https://my-json-server.typicode.com/seetheduck/reactPrac/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts()
  },[query])
  return (
    <div>
      <Container>
      <div className='NewArrival-area'>
        <p className='NewArrival-text'>New Arrivals</p>
        <p className='update-new'>매주 화,금 신상 업데이트[48시간동안 7% 할인]</p>
      </div>
        <Row>
          {productList.map(menu => <Col lg={4}><NewArrival item={menu}/></Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
