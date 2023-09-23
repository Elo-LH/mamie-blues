import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${colors.backgroundDark};
`

function Footer() {
  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/recipe">Recipe</StyledLink>
    </NavContainer>
  )
}

export default Footer
