import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        Drum Kit <Badge>2021</Badge>
      </Title>
      <Paragraph>
      I have created this website. A Drum Kit that you can play on laptop or computer with your keyboard. You don&#39; need anything extra to play drums. Enjoy!!!
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://drums-kits-game.netlify.app/">
          https://drums-kits-game.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
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

        <WorkImage w={10} src="/images/works/Drumkit_eyecatch.png" />

    </Container>
  )
}

export default Work
