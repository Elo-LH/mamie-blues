import styled from 'styled-components'
import colors from '../../utils/style/colors'
import GrannyReading from '../../assets/Granny-reading.png'
import BlueberryPie from '../../assets/Blueberry-pie.png'

const Title = styled.h1`
  color: ${colors.secondary};
  text-align: right;
  margin-top: 0px;
  width: 100%;
`
const Subtitle = styled.h2`
  color: ${colors.primary};
  width: 100%;
`

const Text = styled.p`
  color: ${colors.dark};
  text-align: justify;
  max-width: 1000px;
  align-self: center;
`

const HomeImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10%;
`

const HomeWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 0px;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

function Home() {
  return (
    <HomeWrapper>
      <Title>
        Wake up your inner child with good old fashioned recipes from grannys
      </Title>
      <Subtitle>Welcome to the paradise of vintage cooking !</Subtitle>
      <Text>
        You'll find here recipesb from grannys all over the world. Feel free to
        explore and cook. Rediscover the taste of homemade cookies or explore
        new cultures. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur?
      </Text>
      <HomeImg
        src={GrannyReading}
        alt="grandmother sitting at a table and reading a book"
      />
      <Subtitle>Explore classics from other countries</Subtitle>

      <Text>
        You'll find here recipesb from grannys all over the world. Feel free to
        explore and cook. Rediscover the taste of homemade cookies or explore
        new cultures. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem <em>accusantium doloremque laudantium</em>, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora
        <em>accusantium doloremque laudantium</em> incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </Text>
      <HomeImg
        src={BlueberryPie}
        alt="Blueberry pie on a cutting board with blueberries and strawberries around"
      />
    </HomeWrapper>
  )
}

export default Home
