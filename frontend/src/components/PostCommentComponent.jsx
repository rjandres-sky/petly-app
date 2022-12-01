import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "../images/register.png";

const PostComment = ({ currentUser, action, location, id}) => {

    console.log(currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [caption, setCaption] = useState("");
    const [selectedFile, setSelectedFile] = useState('')
    const [picture, setPicture] = useState("");

    const onChangeCaptionHandler = (event) => {
        setCaption(event.target.value);
    };

    const onChangePictureHandler = (event) => {
        const file = event.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setSelectedFile(reader.result)
        };
        setPicture(event.target.value);
    };



    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [profilePicture, setProfilePicture] = useState("");
    // const [petType, setPetType] = useState("");
    // const [petName, setPetName] = useState("");
    // 

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(selectedFile)
        const body = {
            caption: caption,
            img: selectedFile
        }

        const handleLoadPost = () => {
            axios.get('http://localhost:8080/all')
                .then(result => {
                    dispatch({
                        type: "LOAD_ALLPOST", payload: result.data
                    })
                }
                )
                .catch(console.log)
        }
        if (action === "NEW POST") {
            formData.append("pet_id", currentUser._id)
            formData.append("caption", caption)
            formData.append("img", selectedFile)

            axios.post('http://localhost:8080/posts', formData, { headers: { "Content-Type": "multipart/form-data" } })
                .then(result => {
                    handleLoadPost()
                    alert('New post created')
                    setCaption("");
                    setPicture("");
                });
        } else {

            if (location === 'post') {
                formData.append("pet_id", currentUser._id)
                formData.append("post_id", id)
                formData.append("caption", caption)
                formData.append("img", selectedFile)
            } else if (location === 'shared') {
                formData.append("pet_id", currentUser._id)
                formData.append("shared_id", id)
                formData.append("caption", caption)
                formData.append("img", selectedFile)
            } else if (location === 'comment') {
                formData.append("pet_id", currentUser._id)
                formData.append("comment_id", id)
                formData.append("caption", caption)
                formData.append("img", selectedFile)
            }



            axios.post('http://localhost:8080/comments/'+location, formData, { headers: { "Content-Type": "multipart/form-data" } })
                .then(result => {
                    handleLoadPost()
                    alert('commented on' + location)
                    setCaption("");
                    setPicture("");
                });
        }


    };


    return (
        <section className="w-50 p-4 card" >
            <form
                onSubmit={onSubmitFormHandler}
            >
                <p className="h5 text-center"> Add new post </p>
                <div className="form-outline mb-4">
                    <textarea
                        className="form-control form-control-lg"
                        type="text"
                        value={caption}
                        placeholder = " Post your pet`s activity ... "
                        onChange={onChangeCaptionHandler}
                        required />
                </div>

                <div className="form-outline mb-2 ">
                    <input
                        className="form-control form-control-sm w-50 "
                        id="profile-picture"
                        type="file"
                        value={picture}
                        onChange={onChangePictureHandler}
                    />
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-success center">
                        {action === "NEW POST" ? "Create Post" : "Comment"}
                    </button>
                </div>
            </form>
        </section>


    );
};

export default PostComment;
