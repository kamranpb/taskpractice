import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { IPost } from "../../types";

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
      <div className="post">
        <p className="headerPost">{post?.title.toUpperCase()}</p>
        <p className="writtenBy">Written by user {post?.userId}</p>
        <p className="postBody">
          {post?.body}
          {post?.body}
          {post?.body} 
        </p>
      </div>
    </section>
  );
};

export default Post;
