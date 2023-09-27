import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ClockWrapper = styled.div``

const ClockImage = styled.div`
  margin: 20px;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid white;
  &.five {
    background-image: linear-gradient(
        -60deg,
        ${(props) => props.clockBackground} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.ten {
    background-image: linear-gradient(
        -30deg,
        ${(props) => props.clockBackground} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.fifteen {
    background-image: linear-gradient(
        0deg,
        ${(props) => props.clockBackground} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.twenty {
    background-image: linear-gradient(
        30deg,
        ${(props) => props.clockBackground} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.twenty-five {
    background-image: linear-gradient(
        60deg,
        ${(props) => props.clockBackground} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.thirty {
    background-image: linear-gradient(
        90deg,
        ${(props) => props.clockBackground} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.thirty-five {
    background-image: linear-gradient(
        -60deg,
        ${(props) => props.clockColor} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.fourty {
    background-image: linear-gradient(
        -30deg,
        ${(props) => props.clockColor} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.fourty-five {
    background-image: linear-gradient(
        0deg,
        ${(props) => props.clockColor} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.fifty {
    background-image: linear-gradient(
        30deg,
        ${(props) => props.clockColor} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }
  &.fifty-five {
    background-image: linear-gradient(
        60deg,
        ${(props) => props.clockColor} 50%,
        transparent 50%
      ),
      linear-gradient(
        -90deg,
        ${(props) => props.clockColor} 50%,
        ${(props) => props.clockBackground} 50%
      );
  }

  &.full {
    background-color: ${(props) => props.clockColor};
  }
`

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

    console.log(time)
    var clockColor = ''
    var clockBackground = ''

    if (time <= 60) {
      clockColor = 'green'
      clockBackground = `${colors.backgroundDark}`
    } else if (time <= 120) {
      clockColor = 'orange'
      clockBackground = 'green'
    } else {
      clockColor = 'red'
      clockBackground = 'orange'
    }
    console.log(clockColor)
    console.log(clockBackground)

    var clockFilling = ''
    const minutes = (time + 60) % 60
    switch (minutes) {
      case 5:
        clockFilling = 'five'
        break
      case 10:
        clockFilling = 'ten'
        break
      case 15:
        clockFilling = 'fifteen'
        break
      case 20:
        clockFilling = 'twenty'
        break
      case 25:
        clockFilling = 'twenty-five'
        break
      case 30:
        clockFilling = 'thirty'
        break
      case 35:
        clockFilling = 'thirty-five'
        break
      case 40:
        clockFilling = 'fourty'
        break
      case 45:
        clockFilling = 'fourty-five'
        break
      case 50:
        clockFilling = 'fifty'
        break
      case 55:
        clockFilling = 'fifty-five'
        break
      default:
        clockFilling = 'full'
    }
    console.log(clockFilling)

    return (
      <ClockWrapper>
        <ClockImage
          clockColor={clockColor}
          clockBackground={clockBackground}
          className={clockFilling}
          alt="clock image"
        ></ClockImage>
        <ClockText>{time}</ClockText>
      </ClockWrapper>
    )
  }
}

export default Clock
