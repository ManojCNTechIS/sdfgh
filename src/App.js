import React, { useState, useEffect } from "react";


function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "https://all-the-weather.herokuapp.com/cities"
    );
   const data = await response.json();
    setPosts(data.items);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
      <table>
        <li>{posts.map(post =>(post.id))}</li>
        <li>{posts.map(post =>(post.name))}</li>
      </table>
    </div>
  );
}

export default App;
