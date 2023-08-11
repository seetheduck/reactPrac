import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['BEST', '미리 만나는 가을[7% Off]', 'RONDE(제작)/최대 70%할인', 'OUTER', 'KNIT', 'TOP', 'SHIRTS', 'BOTTOM', 'SHOES & BAG', 'ACC', 'ACCOUNT', 'COMMUNITY'];
  const navigate = useNavigate();

  return (
    <div>
      <div className="sliding-word">
        <div>
          8/6(일) 신상 업데이트 완료!
        </div>
        <div>
          입고 지연 안내는 Delay 게시판을 이용해주세요.
        </div>
      </div>
      <div className="logoMain">
        <div id='nav-drop'>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              =
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">SHOP</Dropdown.Item>
              <Dropdown.Item href="#/action-2">BEST</Dropdown.Item>
              <Dropdown.Item href="#/action-3">미리 만나는 가을[7% Off]</Dropdown.Item>
              <Dropdown.Item href="#/action-4">RONDE(제작)/최대70%할인</Dropdown.Item>
              <Dropdown.Item href="#/action-5">OUTER</Dropdown.Item>
              <Dropdown.Item href="#/action-6">KNIT</Dropdown.Item>
              <Dropdown.Item href="#/action-7">TOP</Dropdown.Item>
              <Dropdown.Item href="#/action-8">SHIRTS</Dropdown.Item>
              <Dropdown.Item href="#/action-9">BOTTOM</Dropdown.Item>
              <Dropdown.Item href="#/action-10">SHOES&BAG</Dropdown.Item>
              <Dropdown.Item href="#/action-11">ACC</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <img className='homeImg' width={100} src='https://t1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6H5a/image/D6si366Dm-rwWVLXQ-4lcuk3uXU.png' onClick={() => navigate("/")} />
        <div className="buttons">
          <div onClick={() => navigate("/login")}><FontAwesomeIcon icon={faUser} /></div>
          <div onClick={() => navigate("/Search")}><FontAwesomeIcon icon={faSearch} /></div>
          <div><FontAwesomeIcon icon={faBagShopping} /></div>
        </div>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map(menu => <li>{menu}</li>)}
        </ul>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
