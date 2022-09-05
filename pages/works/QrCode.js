import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        Qr Code <Badge>2021</Badge>
      </Title>
      <Paragraph>
        I have created this website. A Qr code website. This was a challenge by Fontend Mentor.io and i have completed this challenge and this is the result.
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://qrs-codes.netlify.app/">
          https://qrs-codes.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
          </Link>
        </ListItem>
        <ListItem my={1}>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/ios/Andriod</span>
        </ListItem>
        <ListItem my={1}>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
      </List>

        <WorkImage w={10} src="/images/works/QrCode_eyecatch.png" />

    </Container>
  )
}

export default Work
