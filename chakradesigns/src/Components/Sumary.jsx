import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
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
          <VStack>
            <Heading>Summary</Heading>
            <HStack>
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
              <Text>Reaction</Text>
              <Text>80/100</Text>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Center>
  );
}

export default Sumary;
