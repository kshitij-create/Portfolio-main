import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        Tesla-Clone <Badge>2021</Badge>
      </Title>
      <Paragraph>
        A Tesla Clone Website. In real this website is made by Tesla but i have
        just clone that website with my Frontend web Devlopment skills and this
        project is just for fun!
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://teslaclones.netlify.app">
            https://teslaclones.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
          </Link>
        </ListItem>
        <ListItem my={1}>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/ios/Andriod</span>
        </ListItem>
        <ListItem my={1}>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS</span>
        </ListItem>
      </List>

        <WorkImage w={10} src="/images/works/Tesla_Works.png" />

    </Container>
  )
}

export default Work
