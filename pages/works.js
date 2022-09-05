import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WorkGridItem } from '../components/grid-item.js'
import Section from '../components/section.js'
import thumbSkyRocket from '../public/images/works/SkyRocket_eyecatch.png'
import thumbTesla from '../public/images/works/Tesla_eyecatch.png'
import thumbDrumKit from '../public/images/works/DrumKit_eyecatch.png'
import thumbDicee from '../public/images/works/Dicee_eyecatch.png'
import thumbTindog from '../public/images/works/Tindog_eyecatch.png'
import thumbTextUtils from '../public/images/works/TextUtils_eyecatch.png'
import thumbQrCode from '../public/images/works/QrCode_eyecatch.png'
import styled from 'styled-components'

const Works = () => {
  return (
    <Container>
      <Heading as="h1" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <Card>
              <WorkGridItem
                id="Tesla"
                title="Tesla-Clone"
                thumbnail={thumbTesla}
                className="Card"
              >
                A Tesla website clone. I have created a tesla website clone to hone my frontend web
                devlopment skills. In this site you can see some of Tesla products.
              </WorkGridItem>
            </Card>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <WorkGridItem
              id="skyRocket"
              title="SkyRocket"
              thumbnail={thumbSkyRocket}
            >
              A SkyRocket. Luxco allows you to automate your buissness so you can focus on what&#39;s important. 
              Skyrocket your results!!!
            </WorkGridItem>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <WorkGridItem
              id="DrumKit"
              title="Drum Kit"
              thumbnail={thumbDrumKit}
            >
              A Drum Kit that you can play on laptop or computer with your keyboard. You don&#39;t need anything extra to play drums. Enjoy!!!
            </WorkGridItem>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <WorkGridItem
              id="Dicee"
              title="Dicee"
              thumbnail={thumbDicee}
            >
              A Dice Game. In this game you just have to reload the page and the computer will randomly select that who will win Player 1 or Player 2.
            </WorkGridItem>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <WorkGridItem
              id="Tindog"
              title="Tindog"
              thumbnail={thumbTindog}
            >
              A Tindog website. Here you can meet new and interesting dogs nearby. It&#39;s very easy to use and we have free and premium plans.
            </WorkGridItem>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <WorkGridItem
              id="TextUtils"
              title="TextUtils"
              thumbnail={thumbTextUtils}
            >
              A Text Utils website. In this website you can edit Text like convert it into UpperCase, LowerCase etc.
            </WorkGridItem>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            <WorkGridItem
              id="QrCode"
              title="QrCode"
              thumbnail={thumbQrCode}
            >
              A Qr code website. This was a challenge by Fontend Mentor.io and i have completed this challenge and this is the result.
            </WorkGridItem>
          </motion.div>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

const Card = styled.div`
    padding-top: 20px;
`

export default Works
