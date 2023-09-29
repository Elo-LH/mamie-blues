import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ServingsWrapper = styled.div`
  display: flex;
`

const ServingsButton = styled.span`
  background-color: ${colors.secondary};
  color: ${colors.dark};
  font-size: 3em;
  align-self: center;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: ${(props) =>
    props.left
      ? '100% 0% 0% 100% / 50% 50% 50% 50%'
      : '0% 100% 100% 0% / 30% 50% 50% 70%'};
  @media (min-width: 600px) {
  }
  @media (min-width: 900px) {
  }
  &:hover {
    cursor: pointer;
  }
`

const ServingsText = styled.p`
  height: stretch;
  background-color: ${colors.backgroundLight};
  color: ${colors.dark};
  border-left: solid ${colors.dark};
  border-right: solid ${colors.dark};
  text-align: center;
  align-self: center;
  padding-right: 20px;
  padding-left: 20px;
`

class Servings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { servings } = this.props

    return (
      <ServingsWrapper>
        <ServingsButton left>-</ServingsButton>
        <ServingsText>{servings} 🍴</ServingsText>
        <ServingsButton right>+</ServingsButton>
      </ServingsWrapper>
    )
  }
}

export default Servings
