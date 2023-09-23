import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'caladea', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
        margin: 0;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
