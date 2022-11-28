import { useSelector } from 'react-redux'
import '../styles/NewsFeedPageStyles.css'
import ProfilePageButton from '../components/ProfilePageButton'

const NewsFeedPage = () => {
    
    const { data } = require('../data')

    return (
        <div className='profile-container'>
                THIS IS NEWS FEED PAGE
                <ProfilePageButton/>
                {       
                <div
                className='pet-type-container'>
                {
                    data.map((items) => (
                        <div
                            className='pet-type'
                            key={items.name}>
                            {console.log('icons', items.icon)}
                            <div className='pet-icon'> 
                                <img 
                                src={items.icon} 
                                alt='' />
                            </div>
                        </div>
                    ))
                }
            </div>}
            <div className='pet-username-container'>
                <div>
                    pet username here
                </div>
                <div>

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