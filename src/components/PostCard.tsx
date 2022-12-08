import React, { useEffect } from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Id, PostAction } from "../redux/action/postActions";

interface IPostCard {
  postTitle: string;
  postId: number;
}

export const PostCard = ({ postTitle, postId }: IPostCard) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(PostAction({ title: postTitle, id: postId }));
  }, []);

  return (
    <Link to={`post/${postId}`}>
      <div className="Postcard-wrapper">
        <aside className="Postcard yellow">
          <p>
            {" "}
            <h2>{postId}</h2>
            <h4>{postTitle.substring(0, 22)}...</h4>
          </p>
          <span className="fold"></span>
        </aside>
      </div>
    </Link>
  );
};
