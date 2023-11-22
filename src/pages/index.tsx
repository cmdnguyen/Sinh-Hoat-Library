// localhost:3000
import Hero from "../components/Hero";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ReactElement } from 'react'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    )
  }



function HomePage({heading, description, children, href}: CardItemsProps) {
  return (
    <>
      <Hero />

      <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Welcome to the Sinh Hoạt Library!
        </Heading>
        <Text color={'gray.100'} fontSize={{ base: 'sm', sm: 'lg' }}>
            This is an interactive library for any TNTT members to use.
            You can learn skills and songs from this site. You can see the lyrics and listen to the songs. You can also test your knowledge with an interactive game.
        </Text>
      </Stack>

      <Container maxW={'7x1'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
            {CARD_ITEMS.map((cardItem) => (
          <Card
            heading={cardItem.heading}
            // icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={cardItem.description}
            href={cardItem.href}
          />
          ))}
        </Flex>
      </Container>
    </Box>
    </>
  );
}
interface CardItemsProps {
    heading: string
    description: string
    href: string
  }
const CARD_ITEMS: Array<CardItemsProps> = [
    {
        heading: 'Morse Code',
        description: 'Learn Morse here',
        href: '/chuyenmon/morse',
    },
    {
        heading: 'Semaphore',
        description: 'Learn Semaphore here',
        href: '/chuyenmon/semaphore',
    },
    {
        heading: 'Road Signs',
        description: 'Freshen up on your dau duong',
        href: '/chuyenmon/roadsigns',
    },
    {
        heading: 'Knots',
        description: 'Learn knots here',
        href: '/chuyenmon/knots',
    },
    {
        heading: 'Ca Chính Thức',
        description: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
        href: '/songs/basic',
    },
    {
        heading: 'Sinh Hoạt',
        description: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
        href: '/songs/activities',
    },
    {
        heading: 'Khen Thưởng',
        description: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
        href: '/songs/awards',
    }

]

export default HomePage;
