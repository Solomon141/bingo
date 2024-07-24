import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <div>Bingo APP</div>

      <ul>
        {posts.length > 0 &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        <li></li>
      </ul>
    </div>
  );
}

export default App;
