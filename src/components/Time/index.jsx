import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Component } from 'react'

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TimeText = styled.p`
  color: ${colors.secondary};
`
class Time extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { timing } = this.props

    return (
      <TimeWrapper>
        <TimeText>Total time :{timing.total}</TimeText>
        <TimeText>Preparation time : {timing.preparation}</TimeText>
        <TimeText>Cooking time : {timing.cooking}</TimeText>
        <TimeText>Resting time :{timing.resting}</TimeText>
      </TimeWrapper>
    )
  }
}

export default Time
