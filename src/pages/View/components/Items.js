import { Checkbox } from "@chakra-ui/checkbox";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

const Item = ({ title, subTitle, danger, done }) => {
  return (
    <Flex>
      <Box>
        <Heading
          fontWeight="normal"
          size="md"
          textColor={done && "brand.500"}
          css={{ textDecoration: done && "line-through" }}
        >
          {title}
        </Heading>

        <Text fontWeight="light" fontSize="sm" textColor={danger && "red.400"}>
          {subTitle}
        </Text>
      </Box>
      <Spacer />
      <Checkbox size="lg" colorScheme="brand" />
    </Flex>
  );
};

const Late = () => {
  return (
    <Box p={6}>
      <Text textColor="gray">Late</Text>
      <Stack mt={2} spacing={4}>
        <Item title="Call Max" subTitle="20:15 . April 28" danger />
      </Stack>
    </Box>
  );
};

const Today = () => {
  return (
    <Box p={6}>
      <Text textColor="gray">Today</Text>
      <Stack mt={2} spacing={4}>
        <Item title="Practice piano" subTitle="16:00" />
        <Item title="Learn Spanish" subTitle="16:00" />
      </Stack>
    </Box>
  );
};

const Done = () => {
  return (
    <Box p={6}>
      <Text textColor="gray">Done</Text>
      <Stack mt={2} spacing={4}>
        <Item title="Finalize presentation" subTitle="16:00" done />
      </Stack>
    </Box>
  );
};

export default () => {
  return (
    <Box
      position="absolute"
      mt={-6}
      w="100%"
      bg="white"
      borderRadius="3xl"
      minH="20vh"
    >
      <Late />
      <Today />
      <Done />
    </Box>
  );
};
