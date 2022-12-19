import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { ActionPost } from "../redux/Action";
import { stateType } from "../redux/Reducer";
import { IPost } from "../types";

export default function Posts() {
  const { id } = useParams();

  // const [posts, setPosts] = useState<IPost[] | null>(null);
  const posts = useSelector((state: stateType)=>state.posts)
const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      axios
        .get<IPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(({ data }) => dispatch(ActionPost(data!)));

    }
  }, []);
  
  return (
    <>
      <section className="container">
        <h1>POSTS</h1>
        <div className="containerCard">
          {posts?.map(({id,title}:IPost) => (          
            <PostCard
              postId={id}
              postTitle={title}
              key={id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
