import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`
