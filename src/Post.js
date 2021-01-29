import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import { db } from "./firebase";
const Post = forwardRef(({ name, description, message, pitcureUrl }, ref) => {
  const deletePostHandler = () => {
    console.log("working");
  };
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={pitcureUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message} </p>
      </div>
      {/* <button onClick={deletePostHandler}>delete</button> */}
      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="#70B5f9" />
        <InputOption Icon={CommentIcon} title="comment" color="#E7A33E" />
        <InputOption Icon={ShareIcon} title="share" color="#C0CBCD" />
        <InputOption Icon={SendIcon} title="send" color="#7FC15E" />
      </div>
    </div>
  );
});

export default Post;
