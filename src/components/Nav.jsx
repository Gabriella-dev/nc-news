import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import _ from "lodash";

const Nav = ({ setTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className='Nav'>
      <Link to={"/articles"}>
        <button>News</button>
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
    </nav>
  );
};

export default Nav;
