author: "grumpy19";
body: "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.";
comment_count: "11";
created_at: "2020-11-22T00:00:00.000Z";
title: "The Notorious MSG’s Unlikely Formula For Success";
topic: "cooking";
votes: 0;

da(
  <li key={article.article_id}>
    <h4>Author: {article.author}</h4>
    <p>
      At:
      {article.created_at.substring(0, 10)}
    </p>
    <h3>{article.title}</h3>
    <p>{article.body}</p>
    <p>
      votes: {article.votes} Comments: {article.comment_count}
    </p>
  </li>
);

const ArticleCard = (props) => {
  const { article } = props;
  const params = useParams;

  return (
    <li key={article.article_id}>
      <h4>Author: {article.author}</h4>
      <p>
        At:
        {article.created_at.substring(0, 10)}
      </p>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>
        votes: {article.votes} Comments: {article.comment_count}
      </p>
    </li>
  );
};

export default ArticleCard;
