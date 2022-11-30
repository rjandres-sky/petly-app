import React from "react";
import Buttons from './Buttons';
import CommentComponent from "./CommentComponent";
import "./PostComponent.css";
import ReactionsComponent from "./ReactionComponent";
//import Avatar from "@material-ui/core/Avatar";

function PostComponent({ post }) {

  console.log(post.post_id)
  return (
    <>
      <div className="post card-body m-3 p-3 shadow-lg rounded">
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
        
          <ReactionsComponent id= {post._id} location = {post.post_id === undefined ? 'post' : 'shared'} reacts = {post.reacts}/>
        
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
