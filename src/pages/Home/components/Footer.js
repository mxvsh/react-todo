import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiHeart } from "react-icons/fi";

export default () => {
  const Heart = (
    <Box textColor="red.400">
      <FiHeart />
    </Box>
  );
  return (
    <Center>
      <Flex alignItems="center" mt={6}>
        <Box textAlign="center" mr={2}>
          <Text>Designed with</Text>
        </Box>
        {Heart}
      </Flex>
    </Center>
  );
};
