import { Box } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";

import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Heading } from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import Lists from "../../Lists";
import { Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";

export default ({ listName }) => {
  const history = useHistory();
  return (
    <Box>
      <Flex p={4} textColor="white" alignItems="center">
        <Box
          fontSize="4xl"
          onClick={() => history.goBack()}
          _hover={{ cursor: "pointer" }}
        >
          <FiChevronLeft />
        </Box>
        <Spacer />
        <Box fontSize="2xl">
          <BsThreeDotsVertical />
        </Box>
      </Flex>
      <Box p={12} textColor="white">
        <IconButton
          icon={Lists[listName].icon}
          fontSize="2xl"
          size="lg"
          bg="white"
          textColor="brand.500"
          borderRadius="full"
        />
        {/* <Box
          fontSize="3xl"
          p={2}
          bg="white"
          textColor="brand.500"
          w="12"
          borderRadius="full"
        >
          {Lists[listName].icon}
        </Box> */}
        <Heading mt={4}>{Lists[listName].title}</Heading>
        <Text>{Lists[listName].tasks} Tasks</Text>
      </Box>
    </Box>
  );
};
