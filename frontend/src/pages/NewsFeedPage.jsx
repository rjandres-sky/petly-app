import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostComponent from '../components/PostComponent'
import '../styles/NewsFeedPageStyles.css'
import { FaTrash } from "react-icons/fa";


const NewsFeedPage = () => {
    const [posts, setPosts] = useState([])
    const allPost = useSelector(state => state.Posts)
    const dispatch = new useDispatch()
    console.dir(allPost)

    const { data } = require('../data')

    const addPost = (post) => {
        const updatedPosts = [...posts]
        updatedPosts.unshift(post)
        setPosts(updatedPosts)
    }

    const getAllPost = () => {
        axios.get('http://localhost:8080/all')
            .then(result => {
                dispatch({
                    type: "LOAD_ALLPOST", payload : result.data
                }) 
            }
            )
            .catch(console.log)
    }
    useEffect(() => {
        getAllPost()

    }, [])

    return (
        <div
            className='profile-container'>
            hsuddsjkldkcx
            {<div
                className='pet-type-container'>
                {
                    data.map((items) => (
                        <div
                            className='pet-type'
                            key={items.name}>
                            {console.log('icons', items.icon)}
                            <div
                                className='pet-icon'>
                                <img
                                    src={items.icon}
                                    alt='' />
                            </div>
                        </div>
                    ))
                }
            </div>}
            <div
                className='pet-username-container'>
                <div>
                    {allPost.map(post => {
                        return (
                            <PostComponent post = {post} />
                        )
                    })}
                </div>
                <div className='delete-icon'>
                <FaTrash />
                </div>
            </div>
            <div
                className='pet-post-container'>


            </div>
            <div
                className='pet-reacts-container'>

            </div>
            <div
                className='pet-caption-container'>
                <div
                    className='pet-caption-username'>

                </div>
                <div
                    className='pet-caption'>

                </div>
            </div>
        </div>
    )
}

export default NewsFeedPage