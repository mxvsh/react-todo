import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Card from "./components/Card";
import Header from "./components/Header";

import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import FAB from "../../components/FAB";
import Lists from "../Lists";

export default () => {
  return (
    <Box>
      <Header />
      <Container>
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
          {Object.keys(Lists).map((listItem) => (
            <GridItem>
              <Link to={listItem}>
                <Card {...Lists[listItem]} />
              </Link>
            </GridItem>
          ))}
        </SimpleGrid>
        <Footer />
      </Container>

      <FAB />
    </Box>
  );
};
