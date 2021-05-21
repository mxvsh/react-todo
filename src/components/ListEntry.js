import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Stack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import * as Icons from "react-icons/fi";
import randomcolor from "randomcolor";
import voca from "voca";
import { useState } from "react";

export default ({ isOpen, onClose, onFinish }) => {
  const iconNames = Object.keys(Icons);
  const [icons, setIcons] = useState([]);

  const [data, setData] = useState({
    icon: null,
    title: "",
    tasks: [],
  });

  const Search = (q) => {
    let results = [];
    results = iconNames.filter((name) => {
      return name.toLowerCase().indexOf(q) !== -1;
    });
    return results.slice(0, 4);
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={4}>
          <ModalHeader>New List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input
                autoFocus
                placeholder="List Name"
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
              />

              <Input
                size="sm"
                placeholder="Search Icon"
                onChange={(e) => {
                  const results = Search(e.target.value.toLowerCase());
                  setIcons(results);
                }}
              />
            </Stack>

            <HStack spacing={3} mt={4}>
              {icons.map((icon) => {
                const DIcon = Icons[icon];
                const isSelected = data.i === icon;
                return (
                  <Box
                    fontSize="xl"
                    p={2}
                    bg={isSelected ? "brand.100" : "brand.500"}
                    textColor={isSelected ? "brand.800" : "white"}
                    borderRadius="full"
                    onClick={() => {
                      setData({
                        ...data,
                        i: icon,
                        icon: <DIcon />,
                        color: randomcolor(),
                      });
                    }}
                  >
                    {<DIcon />}
                  </Box>
                );
              })}
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="brand"
              leftIcon={<FiPlus />}
              onClick={() => {
                let key = voca.kebabCase(data.title);
                onFinish({
                  [key]: data,
                });
                onClose();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
