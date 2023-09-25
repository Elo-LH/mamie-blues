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

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>La page demandée n'existe pas</ErrorTitle>
      {/* <Illustration src={ErrorIllustration} /> */}
      <ErrorText>Il y a dû avoir une erreur...</ErrorText>
    </ErrorWrapper>
  )
}

export default Error
