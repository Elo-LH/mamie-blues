import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Component } from 'react'
import Clock from '../Clock'

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ClockWrapper = styled.div`
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
    const { time } = this.props

    return (
      <TimeWrapper>
        <TimeText>{time.name} time</TimeText>
        <Clock minutes={time.minutes} />
      </TimeWrapper>
    )
  }
}

export default Time
