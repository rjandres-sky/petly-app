import React from "react";
import Buttons from './Buttons';
import CommentComponent from "./CommentComponent";
import "./PostComponent.css";
//import Avatar from "@material-ui/core/Avatar";

function PostComponent({ post }) {

  console.log(post)
  return (
    <>
      <div className="post">
        <div className="post__header">
          {/* Header: avatar with username */}
          {/* <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        /> */}
          <h3>{post.pet_id.name}</h3>
        </div>
        {/* Username + caption */}
        <h4 className="post__text">
          {post.body}
        </h4>
        {/* Image */}
        {/* <img className="post__image" src={imageUrl} alt="" /> */}
        <Buttons />
        
        <div style={{paddingLeft : '30px', paddingRight : '5px'}}>
      {post.comments && post.comments.map(comment => {
      
      return (<CommentComponent key={comment._id} comment = {comment} />)
      })}
      </div>
      
      </div>
      
    </>
  );
}

export default PostComponent
