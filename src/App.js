import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Search from './page/Search';

// 전체 상품 페이지, 로그인, 제품 상세 페이지
// 전체 제품이 보임
// 로그인 누르면 로그인 페이지 넘어감
// 상품 디테일을 누르면 상품들 보이기
// buy it now를 눌렀을 때 로그인이 안되어있으면 로그인 페이지로 넘어가기
// 로그아웃 누르면 로그아웃 시키기
// 상품 검색 기능
// hr 선을 기준으로 products2,3 값들도 나타내기

function App() {
  const navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인
  useEffect(()=>{
    navigate("/");
    console.log(authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<ProductDetail authenticate={authenticate}/>}/>
        <Route path="/Search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
