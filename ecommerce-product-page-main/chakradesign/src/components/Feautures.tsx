import { HStack, StackProps, Icon, Text, Box, Stack } from "@chakra-ui/react";
import React from "react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack spacing="24px">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}
function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px" as="section">
      <Stack
        px="48px"
        spacing={["6", "6", "5"]}
        direction={["column", "column", "row"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}

export default Features;
