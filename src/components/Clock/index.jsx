import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ClockWrapper = styled.div``

const ClockImage = styled.img``

const ClockText = styled.p`
  color: ${colors.secondary};
  padding-right: 15px;
`

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { time } = this.props

    return (
      <ClockWrapper>
        <ClockImage alt="clock image"></ClockImage>
        <ClockText>{time}</ClockText>
      </ClockWrapper>
    )
  }
}

export default Clock
