import { Box } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";

import { FiChevronLeft } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Heading } from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import { Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";

import { useLists } from "../../Lists";

export default ({ listName }) => {
  const { lists } = useLists();
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
          icon={lists[listName].icon}
          fontSize="2xl"
          size="lg"
          bg="white"
          textColor="brand.500"
          borderRadius="full"
        />
        <Heading mt={4}>{lists[listName].title}</Heading>
        <Text>{lists[listName].tasks.length} Tasks</Text>
      </Box>
    </Box>
  );
};
