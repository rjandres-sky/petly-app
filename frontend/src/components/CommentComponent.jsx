import React from "react";
import "./PostComponent.css";
import ReactionsComponent from "./ReactionComponent";
//import Avatar from "@material-ui/core/Avatar";

function CommentComponent({ comment }) {
  return (
    <>
    <div className="post card-body m-2 p-2 shadow-lg rounded">
      <div className="post__header">
        {/* Header: avatar with username */}
        {/*  */}
        <h3>{comment.pet_id.name}</h3>
      </div>
      {/* Username + caption */}
      <h4 className="post__text">
        {comment.body}
      </h4>  
      {/* Image */}
      {/* <img className="post__image" src={imageUrl} alt="" /> */} 
       
      <ReactionsComponent id= {comment._id} location = {'comment'} reacts = {comment.reacts}/>

      <div style={{paddingLeft : '30px'}}>
      {comment.comments && comment.comments.map(comment =>{
        return (
        <CommentComponent key={comment._id} comment = {comment}/>
        )
    })}
    </div>
    </div>
  
    

    </>
  );
}

export default CommentComponent
