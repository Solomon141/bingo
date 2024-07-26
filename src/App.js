import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import WebApp from "@twa-dev/sdk";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setPosts(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <div>Bingo APP</div>

      {/* <ul>
        {posts.length > 0 &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        <li></li>
      </ul> */}
      {userData ? (
        <>
          <h1>User Data</h1>
          <ul>
            <li> {userData.id} </li>
            <li> {userData.first_name} </li>
            <li> {userData.last_name} </li>
            <li> {userData.username} </li>
            <li> {userData.language_code} </li>
            <li>
              {userData.is_premium ? "Premium Account" : "Ordinary Account"}
            </li>
          </ul>
        </>
      ) : (
        <>
          <p> User Loading .... </p>
        </>
      )}
    </div>
  );
}

export default App;
