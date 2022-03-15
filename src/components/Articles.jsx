import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  Container,
  useStyleConfig,
  Divider,
} from "@chakra-ui/react";

import { getArticleByTopic, getArticles } from "../utils/api";
import Votes from "./Votes";
import _ from "lodash";

function NotesListBox(props) {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("NotesListBox", { size, variant });
  return <Box as='span' sx={styles} {...rest} />;
}

const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!topic) {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
      });
    } else {
      getArticleByTopic(topic).then((articlesFromApi) => {
        setArticles(articlesFromApi);
      });
    }
  }, [topic]);

  return (
    <Container maxW={"10xl"} p='12'>
      <>
        {!topic ? (
          <Heading as='h1'>All news </Heading>
        ) : (
          <Heading as='h1'>{_.capitalize(topic)} </Heading>
        )}

        <ul>
          {articles.map((article) => {
            return (
              <NotesListBox key={article.article_id}>
                <>
                  <Box
                    marginTop={{ base: "1", sm: "5" }}
                    display='flex'
                    flexDirection={{ base: "column", sm: "row" }}
                    justifyContent='space-between'
                  >
                    <Box
                      display='flex'
                      flex='1'
                      marginRight='3'
                      position='relative'
                      alignItems='center'
                    >
                      <Box
                        width={{ base: "100%", sm: "85%" }}
                        zIndex='2'
                        marginLeft={{ base: "0", sm: "5%" }}
                        marginTop='3%'
                      >
                        <Link to={`/articles/${article.article_id}`}>
                          <Image
                            borderRadius='lg'
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
                        </Link>
                      </Box>

                      <Box
                        zIndex='1'
                        width='100%'
                        position='absolute'
                        height='100%'
                      >
                        <Box
                          backgroundSize='20px 20px'
                          opacity='0.4'
                          height='100%'
                        />
                      </Box>
                    </Box>
                    <Box
                      display='flex'
                      flex='1'
                      flexDirection='column'
                      justifyContent='center'
                      marginTop={{ base: "3", sm: "0" }}
                    >
                      <Link to={`/articles/${article.article_id}`}>
                        <Heading marginTop='1' noOfLines={1}>
                          {article.title}
                        </Heading>
                      </Link>
                      <HStack spacing={2} marginTop={3}>
                        <Tag size={"md"} variant='outline' colorScheme='green'>
                          {`Tag: ${article.topic}`}
                        </Tag>
                        );
                      </HStack>

                      <HStack
                        marginTop='2'
                        spacing='2'
                        display='flex'
                        alignItems='center'
                      >
                        <Image
                          borderRadius='full'
                          boxSize='40px'
                          src='https://100k-faces.glitch.me/random-image'
                          alt={`Avatar of ${article.author}`}
                        />

                        <Text fontWeight='medium'>{article.author}</Text>
                        <Text>—</Text>

                        <Text>{article.created_at.substring(0, 10)}</Text>
                      </HStack>

                      <Text as='p' marginTop='2' fontSize='lg' noOfLines={3}>
                        {article.body}
                      </Text>

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
                          <Votes
                            vote={article.votes}
                            article_id={article.article_id}
                          />
                        </Tag>
                        );
                      </HStack>
                    </Box>
                  </Box>
                </>
                <Divider orientation='horizontal' height='30px' />
              </NotesListBox>
            );
          })}
        </ul>
      </>
    </Container>
  );
};

export default Articles;
