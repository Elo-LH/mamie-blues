import { Component } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ClockBorder = styled.div`
  display: inline-block;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: relative;
  background-color: ${colors.backgroundDark};
  background-image: linear-gradient(
      to right,
      transparent 49%,
      ${colors.backgroundLight} 49%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 49%,
      ${colors.backgroundLight} 49%,
      transparent 51%
    ),
    linear-gradient(-30deg, transparent 50%, #507d9c 50%, transparent 51%),
    linear-gradient(30deg, transparent 50%, #507d9c 50%, transparent 51%),
    linear-gradient(60deg, transparent 50%, #507d9c 50%, transparent 51%),
    linear-gradient(-60deg, transparent 50%, #507d9c 50%, transparent 51%);
`

const ClockImage = styled.div`
position: relative;
top: 5px;
left: 5px;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
}
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
  color: ${colors.dark};
`

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { minutes } = this.props

    // Determining background color and clock color depending on time
    var clockColor = 'green'
    var clockBackground = `${colors.backgroundLight}`
    if (minutes > 60) {
      clockColor = 'orange'
      clockBackground = 'green'
    } else if (minutes > 120) {
      clockColor = 'red'
      clockBackground = 'orange'
    } else if (minutes > 180) {
      clockColor = 'red'
      clockBackground = 'black'
    }
    console.log(clockColor)
    console.log(clockBackground)

    // Determining minutes display on the clock
    var clockFilling = ''
    const minutesDisplayed = (minutes + 60) % 60
    switch (minutesDisplayed) {
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
        <ClockBorder>
          <ClockImage
            clockColor={clockColor}
            clockBackground={clockBackground}
            className={clockFilling}
            alt="clock image"
          ></ClockImage>
        </ClockBorder>
        <ClockText>{minutes} minutes</ClockText>
      </ClockWrapper>
    )
  }
}

export default Clock
