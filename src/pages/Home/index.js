import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Card from "./components/Card";
import Header from "./components/Header";
import {
  MdBook,
  MdContentPaste,
  MdHome,
  MdLocalAirport,
  MdMailOutline,
  MdMusicNote,
} from "react-icons/md";
import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import Footer from "./components/Footer";
import { chakra } from "@chakra-ui/system";
import { IconButton } from "@chakra-ui/button";
import { FiPlus } from "react-icons/fi";

export default () => {
  const Lists = {
    all: {
      title: "All",
      color: "brand.500",
      tasks: 23,
      icon: <MdContentPaste />,
    },
    work: {
      title: "Work",
      color: "yellow.400",
      tasks: 12,
      icon: <MdMailOutline />,
    },

    music: {
      title: "Music",
      color: "red.400",
      tasks: 8,
      icon: <MdMusicNote />,
    },
    travel: {
      title: "Travel",
      color: "green.400",
      tasks: 8,
      icon: <MdLocalAirport />,
    },
    study: {
      title: "Study",
      color: "purple.400",
      tasks: 8,
      icon: <MdBook />,
    },
    home: {
      title: "Home",
      color: "orange.400",
      tasks: 6,
      icon: <MdHome />,
    },
  };

  return (
    <Box>
      <Header />
      <Container>
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
          {Object.keys(Lists).map((listItem) => (
            <GridItem>
              <Card {...Lists[listItem]} />
            </GridItem>
          ))}
        </SimpleGrid>
        <Footer />
      </Container>

      <chakra.div style={{ position: "fixed", bottom: 15, right: 15 }}>
        <IconButton
          borderRadius="full"
          size="lg"
          shadow="md"
          colorScheme="brand"
          icon={<FiPlus />}
        />
      </chakra.div>
    </Box>
  );
};
