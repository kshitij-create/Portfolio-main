import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import styled from 'styled-components'
import { BioSection, BioYear } from '../components/bio.js'
import Paragraph from '../components/Paragraph.js'
import Section from '../components/section.js'

const Page = () => {
  return (
    <Container>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4
            }
          }
        }}
      >
        <Title>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            textAlign="center"
            css={{ backdropFilter: 'blur(10px)' }}
            // w={500}
            mt={5}
          >
            Hello, I&apos;m a full-stack developer based in India!
          </Box>
        </Title>
      </motion.div>

      <Box display={{ md: 'flex' }} w={500}>
        <Box>
            <Heading as="h2" varient="page-title" className="Profile-Text">
              Kshitij Jadhav
            </Heading>
            <p className="Profile-Text">
              Digital Craftzman (Student / Developer / Designer)
            </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            height="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Profile.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Box mt={10}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Kshitij is a full-stack developer based in Navi Mumbai with a
            passion for coding. He is studying in 8th Standard in S.S High School & Junior College. 
            He Love doing Coding, studying and sports. In Coding he has done full-stack development through
            Udemy courses, online and Youtube. He loves studying all subjects are his favourite Subjects. He also love Sports in sports he like Football, Cricket, Badmintion and Volleyball.
          </Paragraph>
        </Box>
        <Box align="center" my={6}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portofolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box mt={10}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2009</BioYear>
            Born in Navi Mumbai, India.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started Coding
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Learning Web Devlopment, Python, AI (Artificial Intelligence), Web Designing
          </BioSection>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box w={510} mt={10}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>Art, Music, Drawing, Sports, Coding, Piano</Paragraph>
        </Box>
      </Section>
    </Container>
  )
}

const Title = styled.div`
  @media (min-width: 0px) and (max-width: 600px) {
    width: 400px;
    margin-left: 20px;
  }
`

export default Page
