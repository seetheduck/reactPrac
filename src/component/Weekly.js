import React from 'react'
import { useNavigate } from 'react-router-dom'

const Weekly = ({item}) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='week-slide'>
        <img src={item?.img} onClick={() => navigate(`/product/${item.id}`)}/>
        <div className="proTitle" onClick={() => navigate(`/product/${item.id}`)}>{item?.title}</div>
        <div className="choice">{item?.choice == true? "[문의폭주]" : ""}</div>
        <div className="price">{item?.price}원</div>
        <div className="explain">{item?.explain}</div>
      </div>
    </div>
  )
}

export default Weekly
