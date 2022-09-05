import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        Dicee Game <Badge>2021</Badge>
      </Title>
      <Paragraph>
        I have created this website. A Dice Game. In this game you just have to reload the page and the computer will randomly select that who will win Player 1 or Player 2.
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://dicee-games.netlify.app/">
          https://dicee-games.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
          </Link>
        </ListItem>
        <ListItem my={1}>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/ios/Andriod</span>
        </ListItem>
        <ListItem my={1}>
          <Meta>Stack</Meta>
          <span>Html, Css, Javascript</span>
        </ListItem>
      </List>

        <WorkImage w={10} src="/images/works/Dicee_eyecatch.png" />

    </Container>
  )
}

export default Work
