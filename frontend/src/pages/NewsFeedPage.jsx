import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Buttons from '../components/Buttons'
import PostComponent from '../components/PostComponent'
import Navbar from '../components/SideBar/Navbar'
import '../styles/NewsFeedPageStyles.css'


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
        if(name === 'all-pets'){
            setPosts('')
        } else {
            setPosts(name)
        }
        
    }

    useEffect(() => {
        if (currentUser._id === undefined) {
            navigate('/login')
        }
        getAllPost()

    }, [])

    return (
        <section className='container d-flex justify-content-center m-2 p-2 '>
            <Navbar />
            <div className=' '>
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
                                    <img key={items.name}
                                        onClick={() => handleFilter(items.name)}
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
                    {allPost.filter(pet => pet.pet_id.pet_type.includes( posts )).map(post => {
                        return (
                            <PostComponent post={post} />
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
        </section>
    )
}

export default NewsFeedPage