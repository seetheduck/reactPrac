import React from 'react'
import { useNavigate } from 'react-router-dom'


const Sliding = ({item}) => {
    const navigate = useNavigate();

  return (
    <div>
      <div className='slide'>
        <img width={370} src={item?.img} onClick={() => navigate(`/product/${item.id}`)}/>
        <div className='silde-word' onClick={() => navigate(`/product/${item.id}`)}>{item?.title}</div>
      </div>
    </div>
  )
}

export default Sliding
