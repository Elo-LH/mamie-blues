import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Component } from 'react'
import Clock from '../Clock'

const TimeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  border-radius: 20px;
`

const TimeText = styled.p`
  color: ${colors.dark};
  text-align: center;
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
        <TimeText>{time.name}</TimeText>
        <Clock minutes={time.minutes} />
      </TimeWrapper>
    )
  }
}

export default Time
