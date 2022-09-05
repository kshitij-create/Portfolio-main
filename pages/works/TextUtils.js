import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/Paragraph.js'
import { Meta, Title, WorkImage } from '../../components/works.js'

const Work = () => {
  return (
    <Container>
      <Title>
        TextUtils <Badge>2021</Badge>
      </Title>
      <Paragraph>
        I have created this website. A Text Utils website. In this website you can edit Text like convert it into UpperCase, LowerCase etc.
      </Paragraph>
      <List ml={4} my={8}>
        <ListItem my={1}>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://tetxutils.netlify.app/">
          https://tetxutils.netlify.app/ <ExternalLinkIcon mx="2px" />{' '}
          </Link>
        </ListItem>
        <ListItem my={1}>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/ios/Andriod</span>
        </ListItem>
        <ListItem my={1}>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS, Bootstrap </span>
        </ListItem>
      </List>

        <WorkImage w={10} src="/images/works/TextUtils_eyecatch.png" />

    </Container>
  )
}

export default Work
