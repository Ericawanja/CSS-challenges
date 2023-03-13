import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Sumary() {
  return (
    <Center width={"100vw"} height="100vh" bg="blackAlpha.100">
      <Box bg="white" maxW={"600px"}>
        <Flex>
          <VStack
            maxW="300px"
            bg="rgb(97,65,252)"
            px={"50px"}
            py="18px"
            borderRadius="8px"
            overflow={"hidden"}
            textAlign="center"
          >
            <Text color={"hsl(221, 100%, 96%)"} pb="4px">
              Your result
            </Text>
            <Circle
              size={"150px"}
              p="10px"
              flexDirection="column"
              gap="10px"
              bgGradient="linear(to-b, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))"
            >
              <Heading color={"white"}>76</Heading>
              <Text color={"hsl(224, 30%, 27%)"}>of 100</Text>
            </Circle>
            <Heading as="h6" fontSize={"1.2rem"} color="white">
              Great
            </Heading>
            <Text
              fontSize={".9rem"}
              color="hsl(221, 100%, 96%)"
              textAlign="center"
            >
              You have scored 65% higher than people who have taken this tests
            </Text>
          </VStack>
          <VStack px="20px" py="18px" display={"block"}>
            <Heading>Summary</Heading>
            <HStack
              bg="hsla(0, 100%, 67%, .05)"
              px="10px"
              py="5px"
              borderRadius="4px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#F55"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                />
              </svg>
              <Text color="hsl(0, 100%, 67%)">Reaction</Text>
              <Text pl="50px">80/100</Text>
            </HStack>
            <Flex
              bg=" hsla(39, 100%, 56%, .08)"
              px="10px"
              py="5px"
              borderRadius="4px"
            >
              <HStack>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                />
              </svg>
              <Box color=" hsl(39, 100%, 56%)">Memory</Box>
              </HStack>
              <Spacer/>
              <Box pl="50px">80/100</Box>
            </Flex>
            <Flex
              bg="hsla(166, 100%, 37%, .05)"
              px="10px"
              py="5px"
              borderRadius="4px"
            >
              <HStack>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#00BB8F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                />
              </svg>
              <Box color="hsl(166, 100%, 37%)">Verbal</Box>
              </HStack>
              <Spacer/>
              <Box pl="50px">80/100</Box>
            </Flex>
            <Flex
              bg="hsla(234, 85%, 45%, .05)"
              px="10px"
              py="5px"
              borderRadius="4px"
            >
              <HStack>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                  />
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                  />
                </svg>

                <Box color="hsl(234, 85%, 45%)">Visual</Box>
              </HStack>
              <Spacer />
              <Box>80/100</Box>
            </Flex>
            <Button  color='white'bg='hsl(224, 30%, 27%)' py='20px' px='70px' borderRadius='20px' >Continue</Button>
          </VStack>
        </Flex>
      </Box>
    </Center>
  );
}

export default Sumary;
