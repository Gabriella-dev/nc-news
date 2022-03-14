import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://gabriella-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};
export const getArticleByTopic = (topic) => {
  return newsApi.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};
export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
export const patchVotes = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.article;
    });
};
export const getArticlecomments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
export const postComment = (article_id, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, body)
    .then(({ data }) => {
      console.log("data comment", data);
      return data;
    });
};
