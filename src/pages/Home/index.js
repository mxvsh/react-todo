import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Card from "./components/Card";
import Header from "./components/Header";

import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import FAB from "../../components/FAB";
import { useLists } from "../Lists";
import { useDisclosure } from "@chakra-ui/hooks";
import ListEntry from "../../components/ListEntry";

export default () => {
  const newList = useDisclosure();
  const { lists, setLists } = useLists();
  return (
    <Box>
      <Header />
      <Container>
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
          {Object.keys(lists).map((listItem) => (
            <GridItem>
              <Link to={listItem}>
                <Card {...lists[listItem]} />
              </Link>
            </GridItem>
          ))}
        </SimpleGrid>
        <Footer />
      </Container>

      <FAB onClick={() => newList.onOpen()} />
      <ListEntry
        isOpen={newList.isOpen}
        onClose={() => newList.onClose()}
        onFinish={(data) => {
          setLists({ ...lists, ...data });
        }}
      />
    </Box>
  );
};
