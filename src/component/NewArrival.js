import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewArrival = ({item}) => {
  const navigate = useNavigate();
  const showDetail = ()=>{
    navigate(`/product/${item.id}`)

  }
  return (
      <div className='NewA'>
        <img width={380} src={item?.img} onClick={showDetail}/>
        <div className="proTitle" onClick={showDetail}>{item?.title}</div>
        <div className="choice">{item?.choice == true? "[문의폭주]" : ""}</div>
        <div className="price">{item?.price}원</div>
        <div className="explain">{item?.explain}</div>
      </div>
  )
}

export default NewArrival
