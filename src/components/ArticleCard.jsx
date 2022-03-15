import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";

import Votes from "./Votes";
import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"green.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          width={{ base: "100%", sm: "85%" }}
          zIndex='2'
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop='3%'
        >
          <Image
            src={
              article.topic === "coding"
                ? "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                : article.topic === "football"
                ? "https://m.media-amazon.com/images/I/91iuG5KYjOL._AC_SL1500_.jpg"
                : "https://wallpapercave.com/wp/wp1955108.jpg"
            }
            alt='some good alt text'
            objectFit='contain'
          />
        </Box>
        <Divider orientation='horizontal' height='10px' />

        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {`Tag: ${article.topic}`}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {article.title}
          </Heading>
          <HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
            <Image
              borderRadius='full'
              boxSize='40px'
              src='https://100k-faces.glitch.me/random-image'
              alt={`Avatar of ${article.author}`}
            />

            <Text fontWeight='medium'>{article.author}</Text>
            <Text>—</Text>

            <Text>
              {article.created_at === undefined
                ? "sometime"
                : article.created_at.substring(0, 10)}
            </Text>
          </HStack>
          <Text color={"gray.500"}>{article.body}</Text>
        </Stack>

        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <HStack spacing={2} marginTop={3}>
            <Link to={`/articles/${article.article_id}/comments`}>
              <Tag
                size={"md"}
                variant='solid'
                colorScheme='green'
                _hover={{ bg: "green.300" }}
              >
                {`Comments: ${article.comment_count}`}
              </Tag>
            </Link>
            <Tag
              size={"md"}
              variant='solid'
              colorScheme='green'
              _hover={{ bg: "green.300" }}
            >
              <Votes vote={article.votes} article_id={article.article_id} />
            </Tag>
            );
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
};
export default ArticleCard;
