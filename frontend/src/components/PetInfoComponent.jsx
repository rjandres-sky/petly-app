import React from "react";

function PetInfoComponent({ post,pet }) {

  /* console.log(pet.pet_id) */
  return (
    <>
    
  console.log({`aa${post.post_id}`})

          <h3> name {post.pet_id.name}</h3>
         {/*  <h3>username {pet.pet_id.username}</h3> */}
       
      
    </>
  );
}

export default PetInfoComponent
