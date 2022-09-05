import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        SkyRocket <Badge>2021</Badge>
      </Title>
      <Paragraph>
        I have created a SkyRocket Website. SkyRocket allows you to automate your buissness so you can focus on what&#39;s important. This is just a Frontend Website created for a client if you want this website you can contact me.
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://sky-rockets.netlify.app/">
          https://sky-rockets.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
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

        <WorkImage src="/images/works/skyRocket_eyecatch.png" />

    </Container>
  )
}

export default Work
