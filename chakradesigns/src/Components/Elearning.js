import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Spacer,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Elearning() {
  return (
    <Center bg="aliceblue">
      <Box minW={"90vw"} minH="100vh" bg="white">
        <HStack pt="20px" px="30px" pb='20px'>
          <img class="logo" src="./e-assets/logo-dark.svg" alt="logo" />
          <Spacer />
          <Button bg="#13183f" color={"white"} borderRadius="20px">
            Get started
          </Button>
        </HStack>
        <Flex gap={'40px'} h='100px'>
          <Box pl='30px' flexGrow={'1'} minw='100%' bg=''>
            <Heading as="h3" color="#13183f">
              Maximize skill, minimize budget
            </Heading>
            <Text>
              Our modern courses across arrange of in deman skills will give you
              the knowledge you need to live the live you want
            </Text>
            <Button>Get started</Button>
          </Box>
          
          <Box flexGrow={'1'}>
            <Box pt='' bg=''>
              <img
                class="logo"
                src="./e-assets/image-hero-desktop@2x.png"
                alt="logo"
              />
              
            </Box>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}

export default Elearning;
