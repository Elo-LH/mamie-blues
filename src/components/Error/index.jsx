import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 100px;
`

const ErrorTitle = styled.h1`
  color: ${colors.secondary};
  text-align: center;
  margin-top: 0px;
`

const ErrorText = styled.p`
  color: ${colors.dark};
  text-align: center;
`

function Error({ error }) {
  return (
    <ErrorWrapper>
      <ErrorTitle>Il y a un petit problème... 🤔</ErrorTitle>
      {/* <Illustration src={ErrorIllustration} /> */}
      <ErrorText>{error}</ErrorText>
    </ErrorWrapper>
  )
}

export default Error
