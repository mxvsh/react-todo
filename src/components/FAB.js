import { IconButton } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { FiPlus } from "react-icons/fi";

export default ({ onClick }) => {
  return (
    <chakra.div style={{ position: "fixed", bottom: 15, right: 15 }}>
      <IconButton
        onClick={onClick}
        borderRadius="full"
        size="lg"
        shadow="md"
        colorScheme="brand"
        icon={<FiPlus />}
      />
    </chakra.div>
  );
};
