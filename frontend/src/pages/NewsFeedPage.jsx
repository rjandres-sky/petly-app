import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Buttons from '../components/Buttons'
import PostComponent from '../components/PostComponent'
import '../styles/NewsFeedPageStyles.css'


const NewsFeedPage = () => {
    const allPost = useSelector(state => state.Posts)
    const currentUser = useSelector(state => state.Auth)
    const navigate = new useNavigate();
    const dispatch = new useDispatch()
    
    console.dir(allPost)
    const [posts, setPosts] = useState([])

    const { data } = require('../data')

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
        console.log(currentUser._id)
        if(currentUser._id === undefined) {
            navigate('/login')
        }
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
                            {/* {console.log('icons', items.icon)} */}
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
                </div>
                <div>

                </div>
            </div>
            <div
                className='pet-post-container'>
                    {allPost.map(post => {
                        return (
                            <PostComponent post = {post} />
                        )
                    })}
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