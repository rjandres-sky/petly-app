import React from "react";
import "../styles/PostComponent.css";
import ReactionsComponent from "./ReactionComponent";
import Avatar from "@mui/material/Avatar";
import PostComment from "./PostCommentComponent";

function CommentComponent({ currentUser, comment }) {
  return (
    <>
      <div className="post m-2 p-2 shadow-lg rounded">
      <p className="text-center h5"> Comments </p>
        <div className="post__header">
          {/* Header: avatar with username */}
          <Avatar
            className="post__avatar "
            alt={comment.name}
            src={comment.pet_id.profile_picture}
          />
          <h3>{comment.pet_id.name}</h3>
        </div>
        {/* Username + caption */}
        <h4 className="post__text">
          {comment.body.caption}

        </h4>
        {/* Image */}
      {comment.body.img === "" && <img className="post__image" src={comment.body.img} alt="" />}

        <ReactionsComponent id={comment._id} location={'comment'} reacts={comment.reacts} />
        <PostComment id={comment._id} currentUser={currentUser} action={"comment"} location={'comment'}/>
      <div style={{ paddingLeft: '30px' }}>
          {comment.comments && comment.comments.map(comment => {
            return (
              <CommentComponent key={comment._id} comment={comment} />
            )
          })}
        </div>
      </div>



    </>
  );
}

export default CommentComponent
