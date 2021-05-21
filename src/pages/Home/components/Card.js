import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default ({ title, color, icon, tasks }) => {
  return (
    <Box p={4} shadow="lg" borderRadius="lg" _hover={{ cursor: "pointer" }}>
      <Box fontSize="4xl" textColor={color}>
        {icon}
      </Box>
      <Heading mt={8} size="md" fontWeight="semibold">
        {title}
      </Heading>
      <Text mt={2} textColor="gray.500">
        {tasks.length} tasks
      </Text>
    </Box>
  );
};
