import { Box } from "@chakra-ui/layout";
import Header from "./components/Header";
import Items from "./components/Items";
import FAB from "../../components/FAB";

export default ({ match }) => {
  const { listName } = match.params;
  return (
    <Box bg="brand.500">
      <Header listName={listName} />
      <Items />
      <FAB />
    </Box>
  );
};
