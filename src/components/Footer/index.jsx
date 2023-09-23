import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SiteName = styled.h2`
  color: blue;
`

function Header() {
  return (
    <NavContainer>
      <SiteName>Mamie Blues</SiteName>
      <Link to="/">Home</Link>
      <Link to="/recipe">Recipe</Link>
    </NavContainer>
  )
}

export default Header
