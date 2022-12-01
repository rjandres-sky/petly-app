import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostComment from '../components/PostCommentComponent'
import PostComponent from '../components/PostComponent'
import Navbar from '../components/SideBar/Navbar'
import RightSideBar from '../components/RightSideBar/RightSideBar'
import '../styles/NewsFeedPageStyles.css'
import Buttons from '../components/Buttons'


const NewsFeedPage = () => {
    const allPost = useSelector(state => state.Posts)
    const currentUser = useSelector(state => state.Auth)
    const navigate = new useNavigate();
    const dispatch = new useDispatch()

    const [posts, setPosts] = useState('')
    const { data } = require('../data')

    const getAllPost = () => {
        axios.get('http://localhost:8080/all')
            .then(result => {
                dispatch({
                    type: "LOAD_ALLPOST", payload: result.data
                })
            }
            )
            .catch(console.log)
    }

    const handleFilter = (name) => {
        console.log(name)
        if (name === 'all-pets') {
            setPosts('')
        } else {
            setPosts(name)
        }

    }

    useEffect(() => {
        if (currentUser._id === undefined) {
            navigate('/')
        }
        console.log()
        getAllPost()

    }, [])

    console.log(allPost)

    return (
        <>
            <section className='newsfeed-page m-2 p-2 '>
            <Navbar/>
                <div className='feed'>
                    {<div
                        className='pet-type-container w-50 mt-3 my-3'>
                        {
                            data.map((items) => (
                                <div
                                    className='pet-type'
                                    key={items.name}>
                                    {/* {console.log('icons', items.icon)} */}
                                    <div
                                        className='pet-icon'>
                                        <img key={items.name}
                                            onClick={() => handleFilter(items.name)}
                                            src={items.icon}
                                            alt='' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>}
                    <div>
                        <PostComment currentUser = {currentUser} action = {'NEW POST'}/>
                    </div>
                    <div
                        className='pet-username-container'>
                        <div>

                        </div>
                    </div>
                    <div
                        className='pet-post-container'>
                        {allPost.filter(pet => pet.pet_id.pet_type.includes(posts)).map(post => {
                            return (
                                <PostComponent currentUser={currentUser} post={post} />
                                // <Buttons />
                            )
                        })}
                    </div>
                   
                </div>
                <RightSideBar/>
            </section>
        </>
    )
}

export default NewsFeedPage