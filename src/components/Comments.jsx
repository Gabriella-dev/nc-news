import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlecomments } from "../utils/api";
import CommentAdder from "./CommentAdder";

const Comments = (props) => {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticlecomments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);
  return (
    <div>
      <h3>Comments</h3>
      <CommentAdder setComments={setComments} />
      <ul className='CommentsList'>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>
                User Name: {comment.author}, at:{" "}
                {comment.created_at.substring(0, 10)}
              </p>

              <p>{comment.body}</p>
              <button>vote: {comment.votes}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
