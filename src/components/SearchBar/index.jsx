import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBarWrapper = styled.div`
  background-color: ${colors.secondary};
  width: 100%;
  padding: 10px;
`

const SearchBarInput = styled.input`
  color: ${colors.primary};
  background-color: ${colors.backgroundLight};
  margin-left: 15px;
  padding: 5px 10px 5px 10px;
  border-radius: 50px;
`
const SearchBarButton = styled(Link)`
  color: ${colors.primary};
  background-color: ${colors.backgroundLight};
  border-radius: 50px;
  margin-left: 10px;
  padding: 5px 10px 5px 10px;
`

function SearchBar() {
  const [input, setInput] = useState('')
  let navigate = useNavigate()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search/${input}`)
    }
  }

  return (
    <SearchBarWrapper>
      <SearchBarInput
        value={input}
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      ></SearchBarInput>
      <SearchBarButton to={`/search/${input}`}>Search recipe</SearchBarButton>
    </SearchBarWrapper>
  )
}

export default SearchBar
