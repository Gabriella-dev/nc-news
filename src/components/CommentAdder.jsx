import React from "react";
import { useParams } from "react-router-dom";
const CommentAdder = (props) => {
  // console.log(props);
  const { prams } = useParams();
  console.log();
  return <form>Add Comment</form>;
};

export default CommentAdder;
// POST /api/articles/:article_id/comments
