import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  StackProps,
  Text,
  Icon,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons";
export const ListItem = (props: StackProps) => {
  console.log(props);
  const { children, ...rest } = props;
  console.log(props, children, rest);
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};
function Pricing() {
  return (
    <Box
      borderRadius="12px"
      overflow="hidden"
      maxW="994px"
      margin="auto"
      mt="-160px"
      boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
     
    >
      <Flex textAlign="center">
        <Box bg="#F0EAFB" p="60px">
          <Text fontSize="24px" fontWeight="800">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>
        <Box bg="white" p="60px" fontSize="18px">
          <Text textAlign="left">
            Acess these features when you get this pricing package for your
            business
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Pricing;
