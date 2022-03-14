import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import _ from "lodash";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Nav = ({ setTopic }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue("green.50", "gray.900")}
        px={4}
        alignItems={"center"}
      >
        <Flex h={16} alignItems={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to={"/articles"}>
                <button>News</button>{" "}
              </Link>
              {topics.map((topic) => {
                return (
                  <Link key={topic.slug} to={`/`}>
                    <button
                      onClick={() => {
                        setTopic(topic.slug);
                      }}
                    >
                      {_.capitalize(topic.slug)}
                    </button>
                  </Link>
                );
              })}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to={"/articles"}>
                <button>News</button>{" "}
              </Link>
              {topics.map((topic) => {
                return (
                  <Link key={topic.slug} to={`/`}>
                    <button
                      onClick={() => {
                        setTopic(topic.slug);
                      }}
                    >
                      {_.capitalize(topic.slug)}
                    </button>
                  </Link>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Nav;
