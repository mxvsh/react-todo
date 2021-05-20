import { Box, Heading } from "@chakra-ui/layout";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default () => {
  return (
    <Box p={6}>
      <Box fontSize="4xl" mb={4}>
        <HiOutlineMenuAlt2 />
      </Box>
      <Heading>Lists</Heading>
    </Box>
  );
};
