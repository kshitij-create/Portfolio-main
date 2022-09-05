import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        Tindog <Badge>2021</Badge>
      </Title>
      <Paragraph>
        I have created this website. A Tindog website. Here you can meet new and interesting dogs nearby. It&#39;s very easy to use and we have free and premium plans. This is just a Frontend Website created for a client if you want this website you can contact me.
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://tindogs-clone.netlify.app/">
          https://tindogs-clone.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
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

        <WorkImage w={10} src="/images/works/Tindog_eyecatch.png" />

    </Container>
  )
}

export default Work
