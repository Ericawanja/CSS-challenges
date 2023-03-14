import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Spacer,
  Flex,
  Text,
  Image,
  GridItem,
  Grid,
  Icon,
} from "@chakra-ui/react";
import React from "react";
const courses = [
  { title: "none" },
  {
    icon: `<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF6F48" offset="0%"/><stop stop-color="#F02AA6" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path d="M33.97 20.678c.565-.498.893-1.21.906-1.962A2.706 2.706 0 0 0 32.16 16a2.794 2.794 0 0 0-1.66.603 2.825 2.825 0 0 0-.854 1.962 2.69 2.69 0 0 0 4.325 2.113Zm-8.752.453c0 .05-.05.05-.1.1v.05a6.308 6.308 0 0 0-2.919 1.41c-.503.473-.958.995-1.358 1.559-1.006 1.408 1.358 2.766 2.315 1.358 1.257-1.762 2.816-2.264 4.527-1.71a141.96 141.96 0 0 0-2.717 5.181c-1.107 2.163-3.47 3.874-5.786 2.566a1.402 1.402 0 1 0-1.508 2.364 6.826 6.826 0 0 0 8.704-1.66c.05 0 .153.05.2.05 1.5.624 2.907 1.454 4.177 2.466.603.502 1.66 3.065 2.263 4.376a1.392 1.392 0 0 0 2.113.452c.393-.382.476-.982.202-1.456-.705-1.456-1.862-4.427-2.818-5.135a31.566 31.566 0 0 0-2.364-1.762l.1-.1a16.972 16.972 0 0 0-1.006-.605c.856-1.609 1.711-3.168 2.616-4.728 2.11.667 4.415.19 6.087-1.258.517-.46.973-.984 1.358-1.56.956-1.257-.905-2.515-2.012-1.66a.709.709 0 0 0-.153.202 4.36 4.36 0 0 1-2.013 1.66c-.05.05-.1.05-.1.1h-.051a4.146 4.146 0 0 1-3.622-.452l.101-.101h.05a.383.383 0 0 0-.201-.1 9.292 9.292 0 0 0-.956-.554 7.258 7.258 0 0 0-5.134-1.056l.005.003Z" fill="#FFF" fill-rule="nonzero"/></g></svg>`,
    title: "Animation",
    text: `Learn the latest animation techniques to create stunning motion
    design and captivate your audience.`,
  },
  {
    title: "Design",
    text: `Create beautiful, usable interfaces to help shape the future of
    how the web looks.`,
    icon: `<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF6F48" offset="0%"/><stop stop-color="#F02AA6" offset="100%"/></linearGradient><path d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16L9 8v8H2l7-8V2h7v14Z" id="b"/></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><use fill="#FFF" xlink:href="#b" transform="translate(19 19)"/></g></svg>`,
  },
  {
    icon: `<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF6F48" offset="0%"/><stop stop-color="#F02AA6" offset="100%"/></linearGradient><path d="M26 28c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" id="b"/></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><use fill="#FFF" xlink:href="#b"/></g></svg>`,
    title: "Crypto",
    text: `All you need to know to get started investing in crypto. Go from
    beginner to advanced with this 54 hour course.`,
  },
  {
    icon: `<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF6F48" offset="0%"/><stop stop-color="#F02AA6" offset="100%"/></linearGradient><path d="m31 18 1.83 2H36c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h3.17L25 18h6Zm-3 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z" id="b"/></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><use fill="#FFF" xlink:href="#b"/></g></svg>`,
    title: "Photography",
    text: `Explore critical fundamentals like lighting, composition, and
    focus to capture exceptional photos.`,
  },
  {
    icon: `<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF6F48" offset="0%"/><stop stop-color="#F02AA6" offset="100%"/></linearGradient><path d="M35 22h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5h-2c-1.1 0-1.99.9-1.99 2L19 36c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2Zm-7-3c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3Zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5Z" id="b"/></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><use fill="#FFF" xlink:href="#b"/></g></svg>`,
    title: "Business",
    text: `A step-by-step playbook to help you start, 
            scale, and sustain your business without outside investment.`,
  },
];
function Elearning() {
  return (
    <Center bg="aliceblue">
      <Box minW={"90vw"} minH="100vh" bg="white">
        <HStack pt="20px" px="60px" pb="20px">
          <img class="logo" src="./e-assets/logo-dark.svg" alt="logo" />
          <Spacer />
          <Button bg="#13183f" color={"white"} borderRadius="20px">
            Get started
          </Button>
        </HStack>
        <Flex gap={"40px"} h="350px" px='60px' pt="40px">
          <Box pl="30px" minw="100%" bg="">
            <Heading as="h3" color="#13183f" fontSize={"2.5rem"}>
              Maximize skill, minimize budget
            </Heading>
            <Text py="30px" color="#83869a">
              Our modern courses across arrange of in deman skills will give you
              the knowledge you need to live the live you want
            </Text>
            <Button
              borderRadius="20px"
              bgGradient="linear(to-b, #ff6f48 0.04%, #f02aa6 100%)"
            >
              Get started
            </Button>
          </Box>

          <Box w="100%" overflow={"hidden"}>
            <Box pt="" bg="" position={"relative"}>
              <Box>
                <Image
                  position={"absolute"}
                  top="-20"
                  left={"10"}
                  src="./e-assets/image-hero-desktop@2x.png"
                  alt="logo"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
        <Center>
          <Grid
            px="50px"
            py="50px"
            gap="44px"
            templateColumns="repeat(3, 250px)"
          >
            {courses.map((course, index) => {
              if (index === 0) {
                return (
                  <>
                    <GridItem
                      borderRadius={"5px"}
                      p="5px"
                      bgGradient="linear(to-b, #ff6f48 0.04%, #f02aa6 100%)"
                      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    >
                      <Text color={"white"}>Check out our popular courses</Text>
                    </GridItem>
                  </>
                );
              } else
                return (
                  <>
                    <GridItem
                      borderRadius={"5px"}
                      pl="25px"
                      pr="60px"
                      pb="20px"
                      boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
                    >
                      <Text
                        py="5px"
                        color="#13183f"
                        fontSize={"1.1rem"}
                        fontWeight="700"
                      >
                        {course.title}
                      </Text>
                      <Text color="#83869a" fontSize={".9rem"}>
                        {course.text}
                      </Text>
                     
                      <Text fontWeight='500' color='#f74780' pt='12px'cursor={'pointer'}>Get started</Text>
                    </GridItem>
                  </>
                );
            })}
          </Grid>
        </Center>
      </Box>
    </Center>
  );
}

export default Elearning;
