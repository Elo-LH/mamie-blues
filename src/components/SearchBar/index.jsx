import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  padding: 5px 10px 5px 10px;
  border-radius: 50px;
  @media screen and (max-width: 50em) {
    padding: 2px 5px 2px 5px;
    margin-left: 0;
  }
  &.input {
    border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
  }
`
const SearchBarButton = styled(Link)`
  color: ${colors.primary};
  background-color: ${colors.backgroundLight};
  border-radius: 50px;
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

  // Actualize suggestions each time one letter is typed in search bar
  const handleChange = (event) => {
    console.log(event)
    console.log(input + event.nativeEvent.data)
    updateSuggestions(findSuggestions(input + event.nativeEvent.data))
    console.log(suggestions)
  }

  // Shows search results page when enter is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search/${input}`)
      setInput('')
      updateSuggestions([])
      console.log(suggestions)
    }
  }

  return (
    <SearchBarWrapper>
      <SearchInputWrapper>
        <SearchBarInput
          placeholder="Search recipe..."
          value={input}
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
