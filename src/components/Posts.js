import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router"
import './Layout.css'


//u posts hocemo da fetch-ujemo podatke i da predstvaimo na nasoj stranici
export const Posts = () => {
  //ovde imamo neko stanje, gde ce na pocetku biti obican prazan niz
  const [posts, setPosts] = useState([]);

  //ali na useEfect kada se sve fetch-uje mozemo da renderujemo te postove
  useEffect(()=> {
    fetch(`https://dummyjson.com/posts`)
    .then((response) => response.json())
    .then((data) => setPosts(data.posts));
  }, [])
  
  return(
<div>
  <h1>Posts</h1>
  <div>
    {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
    ))}
  </div>
</div>
  );
};