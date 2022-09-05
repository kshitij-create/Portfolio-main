import { Box, Container, Heading, Image } from '@chakra-ui/react'
import Head from 'next/head'
import styled from 'styled-components'

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Box
        flexShrink={0}
        //   mt={2}
        textAlign="center"
        pb={5}
      >
        <Image
          position="relative"
          top={16}
          borderColor="#21a2ed"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="120px"
          height="120px"
          display="inline-block"
          borderRadius="full"
          src="/images/Profile.jpeg"
          alt="Profile Image"
        />
        <Hr />
      </Box>
      <Container maxW="container.sm">
        <Box mt={10}>
          <Heading Heading as="h1" varient="page-title" align="center">
            Thanks for taking the time to reach out. How can I help you today?
          </Heading>
        </Box>
        <Box>
          <ContactBtn className="button-64" role="button" align="center">
            <span className="text"><a href="mailto:kshitijjadhav257@gmail.com">Say Hello👋</a></span>
          </ContactBtn>
        </Box>
      </Container>
    </div>
  )
}

const Hr = styled.hr`
  background-color: #21a2ed;
  align-items: center;
  height: 2px;
`

const ContactBtn = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 7rem;
  margin-left: 13.5rem;

  &:active {
    outline: 0;
  }

  &:hover {
    outline: 0;
  }

  span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }

  @media (min-width: 768px) {
    .button-64 {
      font-size: 24px;
      min-width: 196px;
    }
  }
`

export default Contact
