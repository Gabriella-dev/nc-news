import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getArticleByTopic, getArticles } from "../utils/api";
import Votes from "./Votes";
import _ from "lodash";
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
    <main className='Articles'>
      {!topic ? <h4>All news</h4> : <h4>{_.capitalize(topic)}</h4>}
      <ul className='ArticlesList'>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h4>Author: {article.author}</h4>
              <p>at: {article.created_at.substring(0, 10)}</p>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <Votes vote={article.votes} article_id={article.article_id} />
              <Link to={`/articles/${article.article_id}/comments`}>
                <button>Comments: {article.comment_count}</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
