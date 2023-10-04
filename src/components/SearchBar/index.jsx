import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { recipes } from '../../assets/recipes'

const SearchBarWrapper = styled.div`
  background-color: ${colors.secondary};
  padding: 15px;
  display: flex;
`

const SearchInputWrapper = styled.div`
  background-color: ${colors.secondary};
  position: relative;
`

const SearchBarInput = styled.input`
  color: ${colors.primary};
  background-color: ${colors.backgroundLight};
  border: none;
  border-right: 2px solid ${colors.primary};
  padding: 5px 10px 5px 10px;
  border-radius: 7% 0% 0% 7% / 50% 50% 50% 50%;
  @media screen and (max-width: 50em) {
    padding: 2px 5px 2px 5px;
    margin-left: 0;
  }
  ${(props) =>
    props.suggestions.length > 0 &&
    `border-radius: 7% 0% 0% 0% / 50% 50% 0% 0%  ;
    border: 2px solid ${colors.primary};
    `}
  &:focus {
    border: 2px solid ${colors.primary};
  }
`
const SearchBarButton = styled(Link)`
  color: ${colors.primary};
  font-size: 90%;
  background-color: ${colors.backgroundLight};
  border-radius: 0% 50% 50% 0% / 50% 50% 50% 50%;
  padding: 10px 15px 10px 15px;
`

const SuggestionsWrapper = styled.div`
  background-color: ${colors.secondary};
  position: absolute;
  top: 40px;
  width: 100%;
`
const SearchSuggestion = styled(Link)`
  background-color: ${colors.backgroundLight};
  color: ${colors.primary};
  padding: 10px;
  display: flex;
  border: 2px solid ${colors.primary};
`

// Search for recipe name with search entry
export function findSuggestions(searchEntry) {
  let result = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchEntry.toLowerCase())
  )
  if (result.length > 5) {
    result = result.slice(0, 5)
  }
  return result
}

function SearchBar() {
  const [input, setInput] = useState('')
  let navigate = useNavigate()
  const [suggestions, updateSuggestions] = useState([])

  const location = useLocation()

  useEffect(() => {
    setInput('')
    updateSuggestions([])
  }, [location])

  // Actualize suggestions each time one letter is typed in search bar
  const handleChange = (event) => {
    console.log(event)
    console.log(input + event.nativeEvent.data)
    updateSuggestions(findSuggestions(input + event.nativeEvent.data))
  }

  console.log(window.location.pathname)

  // Shows search results page when enter is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search/${input}`)
      console.log(suggestions)
    }
  }

  return (
    <SearchBarWrapper>
      <SearchInputWrapper>
        <SearchBarInput
          placeholder="Search recipe..."
          value={input}
          suggestions={suggestions}
          onInput={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        ></SearchBarInput>
        <SuggestionsWrapper>
          {suggestions.map((suggestion) => (
            <SearchSuggestion
              to={`/recipe/${suggestion.id}`}
              key={`suggestion-${suggestion.id}`}
            >
              {suggestion.name}
            </SearchSuggestion>
          ))}
        </SuggestionsWrapper>
      </SearchInputWrapper>
      <SearchBarButton to={`/search/${input}`}>🔍</SearchBarButton>
    </SearchBarWrapper>
  )
}

export default SearchBar
