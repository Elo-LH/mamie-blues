import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const NavContainer = styled.nav`
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundDark};
`

const SiteName = styled.h2`
  color: ${colors.primary};
`

function Header() {
  return (
    <NavContainer>
      <SiteName>Mamie Blues</SiteName>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/recipes_list">Recipes List</StyledLink>
      <StyledLink to="/favorites">My Favorites</StyledLink>
    </NavContainer>
  )
}

export default Header
