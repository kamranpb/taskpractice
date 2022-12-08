import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";
import { IPost } from "../types";

const Post = () => {
  const { postId } = useParams();

  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    axios
      .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(({ data }) => setPost(data));
  }, []);

  return (
    <section className="PostConatiner">
      <h1>{post?.title.toUpperCase()}</h1>
      <h2>Written by user {post?.userId}</h2>
      <h4>
        {post?.body}
        {post?.body}
        {post?.body}
      </h4>
    </section>
  );
};

export default Post;
