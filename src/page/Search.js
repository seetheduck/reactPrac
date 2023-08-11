import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate();
    const search = (event) => {
        if (event.key == "Enter") {
          let keyword = event.target.value
          console.log("key")
          navigate(`/search?q=${keyword}`);
        }
      }
    return (
        <Container>
            <div className='search-area'>
                <div>PRODUCT SEARCH</div>
                <div>
                    <input type='text' onKeyPress={(event) => search(event)} />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </Container>
    )
}

export default Search
