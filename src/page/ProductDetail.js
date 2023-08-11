import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  /*  const navigate = useNavigate();
    const loginOk =({authenticate})=>{
      if(authenticate == true){
        return ()=> navigate("/login")
      }
    }*/
  const [isDropdownView, setDropdownView] = useState(false)

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView)
  }
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false)
    }, 200);
  }
  const Dropdown = () => {
    return (
      <ul className='drop-detail'>
        <li>--------</li>
        <li>아이보리</li>
        <li>그레이</li>
        <li>블랙</li>
        <li>그린</li>

      </ul>)
  }

  let { id } = useParams();
  const [product, setProduct] = useState(null)
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/seetheduck/reactPrac/products?q=${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <div className='detail-main'>
      <div className='detail-img'>
        <img src={product?.img} />
      </div>

      <div className='option'>
        <div>{product?.title}</div>
        <div>{product?.choice == true? "[문의폭주]" : ""}</div>
        <div>PRICE{product?.price}원</div>
        <div>COLOR</div>
        <div className="container" onBlur={handleBlurContainer}>
          <label onClick={handleClickContainer}>
            <button className='drop-main'>-[필수]옵션을 선택해주세요-{isDropdownView ? '▲' : '▼'}</button>
          </label>
          {isDropdownView && <Dropdown />}
        </div>
        <button className='buy-button'>BUY IT NOW</button>
        <div className='button-sub'>
        <button className='cart'>ADD TO CART</button>
        <button>WISH LIST</button>
        </div>
      </div>
    </div>
  )
}
//<form onSubmit={loginOk}></form>

export default ProductDetail
