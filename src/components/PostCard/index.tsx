import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

interface IPostCard {
  postTitle: string;
  postId: number;
}

export const PostCard = ({ postTitle, postId }: IPostCard) => {
  useEffect(() => {}, []);

  return (
    <Link to={`post/${postId}`} style={{ textDecoration: "none" }}>
      <div className="Postcard-wrapper">
        <aside className="Postcard yellow">
          <div className="postContent">
            {" "}
            <h2>{postId}</h2>
            <h4>{postTitle.substring(0, 22)}...</h4>
          </div>
          <span className="fold"></span>
        </aside>
      </div>
    </Link>
  );
};
