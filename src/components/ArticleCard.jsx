import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { Avatar } from "@chakra-ui/avatar";

import Votes from "./Votes";

const ArticleCard = (props) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <main>
      <h3>Article</h3>
      <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      <h4>Author: {article.author}</h4>
      <p>
        at:
        {article.created_at === undefined
          ? "sometime"
          : article.created_at.substring(0, 10)}
      </p>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <Votes vote={article.votes} article_id={article.article_id} />
      <Link to={`/articles/${article.article_id}/comments`}>
        <button placeholder='comments'>
          Comments: {article.comment_count}
        </button>
      </Link>
    </main>
  );
};

export default ArticleCard;
