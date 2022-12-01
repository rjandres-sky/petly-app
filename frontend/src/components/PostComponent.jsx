import React from "react";
import CommentComponent from "./CommentComponent";
import ReactionsComponent from "./ReactionComponent";
import Avatar from "@mui/material/Avatar";
import PostComment from "./PostCommentComponent";
import Buttons from './Buttons';
import '../styles/PostComponent.css';


function PostComponent({ currentUser, post }) {

  console.log(post.post_id)
  return (
    <>
      <div className="post card-body w-50 m-3 p-3 shadow-lg rounded">
      <p >{post.pet_id.name} added a post  </p>
        <div className="post__header">
          {/* Header: avatar with username */}
          <Avatar
            className="post__avatar"
            alt={post.pet_id.name}
            src={post.pet_id.profile_picture}
          />
          <h3>{post.pet_id.name} {post.post_id && ' shared of ' + post.post_id.pet_id.name}</h3>

        </div>
        {/* Username + caption */}
        <h4 className="post__text">
          { }
          {post.post_id ? post.post_id.body.caption : post.body.caption}
        </h4>
        {/* Image */}
        {post.post_id ?
          (post.post_id.body.img !== "" && <img className="post__image" src={post.post_id.body.img} alt="" />)
          :
          (post.body.img !== "" && <img className="post__image" src={post.body.img} alt="" />)
        }

        <ReactionsComponent id={post._id} location={post.post_id === undefined ? 'post' : 'shared'} reacts={post.reacts} />
        <PostComment id={post._id} currentUser={currentUser} action="comment" location={post.post_id === undefined ? 'post' : 'shared'} />
        <div style={{ paddingLeft: '30px', paddingRight: '5px' }}>
          {post.comments && post.comments.map(comment => {

            return (<CommentComponent currentUser={currentUser} key={comment._id} comment={comment} />)
          })}
        </div>
<Buttons />
      </div>

    </>
  );
}

export default PostComponent
