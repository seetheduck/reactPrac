import React, { useEffect, useState } from 'react'
import NewArrival from '../component/NewArrival';
import Sliding from '../component/Sliding';
import Weekly from '../component/Weekly';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProductAll = () => {


  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/seetheduck/reactPrac/products?${productList}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  const [prod2, setProd2] = useState([]);
  const getPro2 = async () => {
    let url2 = `https://my-json-server.typicode.com/seetheduck/reactPrac/products2${prod2}`
    let response2 = await fetch(url2);
    let data2 = await response2.json();
    setProd2(data2);
  }

  const [prod3, setProd3] = useState([]);
  const getPro3 = async () => {
    let url3 = `https://my-json-server.typicode.com/seetheduck/reactPrac/products3${prod3}`
    let response3 = await fetch(url3);
    let data3 = await response3.json();
    setProd3(data3);
  }

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getPro2()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getPro3()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <div className='slide-area'>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }} navigation={true} modules={[Navigation]} className="mySwiper">
              {prod2 && prod2.map(mm => <SwiperSlide><Sliding item={mm} key={prod2.id} /></SwiperSlide>)}
            </Swiper>
          </div>
        </Row>
        <div className='NewArrival-area'>
          <p className='NewArrival-text'>WEEKLY BEST</p>
          <p className='update-new'>이번주 실시간 베스트 아이템</p>
        </div>
        <Row>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }} navigation={true} modules={[Navigation]} className="mySwiper">
            {prod3 && prod3.map(nn => <SwiperSlide> <Weekly item={nn} key={prod3.id} /></SwiperSlide>)}
          </Swiper>
        </Row>
        <div className='NewArrival-area'>
          <p className='NewArrival-text'>New Arrivals</p>
          <p className='update-new'>매주 화,금 신상 업데이트[48시간동안 7% 할인]</p>
        </div>
        <Row>
          {productList.map(menu => <Col lg={4}><NewArrival item={menu} /></Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
