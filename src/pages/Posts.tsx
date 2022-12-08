import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { IPost } from "../types";

export default function Posts() {
  const { id } = useParams();

  const [posts, setPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<IPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(({ data }) => setPosts(data));
    }
  }, []);

  return (
    <>
      <section className="container">
        <h1>POSTS</h1>
        <div className="containerCard">
          {posts?.map((posts) => (
            <>
              <PostCard postId={posts.id} postTitle={posts.title} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}
