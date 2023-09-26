import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { Component } from 'react'
import Clock from '../Clock'

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
        <TimeText>Total time :</TimeText>
        <Clock time={timing.total} />
        <TimeText>Preparation time :</TimeText>
        <Clock time={timing.preparation} />
        <TimeText>Cooking time :</TimeText>
        <Clock time={timing.cooking} />
        <TimeText>Resting time :</TimeText>
        <Clock time={timing.resting} />
      </TimeWrapper>
    )
  }
}

export default Time
