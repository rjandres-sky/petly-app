import { useSelector } from 'react-redux'
import '../styles/NewsFeedPageStyles.css'
import { FaTrash } from "react-icons/fa";


const NewsFeedPage = () => {
    const [posts, setPosts] = useState([])

    const { data } = require('../data')

    const addPost = (post) => {
        const updatedPosts = [...posts]
        updatedPosts.unshift(post)
        setPosts(updatedPosts)
    }

    return (
        <div
            className='profile-container container card'>
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
                <div className='pet-username'>
                    pet_username
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