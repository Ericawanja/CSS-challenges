import { Box,  Heading, Text, Center } from "@chakra-ui/react";

function Header() {
  return (
    <>
    <Box
      as="section"
      bg="#6B46C1"
      color="#F7FAFC"
      pt="90px"
      pb="198px"
      px="32px"
    >
      <Heading fontWeight="800" fontSize={['3xl', "3xl", '5xl']}>
       <Center>Simple pricing for your business</Center> 
      </Heading>
      <Text fontWeight="500" fontSize={['lg', 'lg', '2xl']} pt="16px">
       <Center>Plans that are carefully crafted to suit your business</Center> 
      </Text>
     
    </Box>
   
    </>
  );
}

export default Header;
