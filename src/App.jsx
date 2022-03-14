// import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import Comments from "./components/Comments";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [topic, setTopic] = useState("");

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Nav setTopic={setTopic} />
          <Routes>
            <Route path='/' element={<Articles topic={topic} />}></Route>
            <Route path='/articles' element={<Articles />}></Route>
            <Route path='/topics' element={<Articles />}></Route>
            <Route
              path='/articles/:article_id'
              element={<ArticleCard />}
            ></Route>
            <Route
              path='/articles/:article_id/comments'
              element={<Comments />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
