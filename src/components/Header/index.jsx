import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundLight};
`

const SiteName = styled.h2`
  color: ${colors.primary};
`

function Header() {
  return (
    <NavContainer>
      <SiteName>Mamie Blues</SiteName>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/recipe">Recipe</StyledLink>
    </NavContainer>
  )
}

export default Header
