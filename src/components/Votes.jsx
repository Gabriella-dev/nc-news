import React, { useState } from "react";
import { patchVotes } from "../utils/api";

const Votes = ({ vote, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const giveVote = () => {
    setVoteChange((currChange) => currChange + 1);
    patchVotes(article_id).catch((err) => {
      setVoteChange((currChange) => currChange - 1);
    });
  };

  return (
    <button onClick={() => giveVote()}> votes: {vote + voteChange}</button>
  );
};

export default Votes;
