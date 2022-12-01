import { PokemonSelector, PokemonCounter, FacebookCounter, FacebookSelector } from '@charkour/react-reactions'
import { useState } from 'react'
import _ from 'lodash'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddReactionTwoToneIcon from '@mui/icons-material/AddReactionTwoTone';
import Tooltip from '@mui/material/Tooltip'
import { FaPaw, FaComment, FaShareSquare } from "react-icons/fa";
import '../styles/ButtonsStyles.css';

const ReactionsComponent = ({ id, location, reacts }) => {
    const currentUser = useSelector(state => state.Auth)
    const [showSelector, setShowSelector] = useState(false)

    const dispatch = new useDispatch()

    const handleAdd = () => {
        setShowSelector(!showSelector)
    }

    const createCounter = (emoji, by, id) => {
        return {
            emoji, by, id
        }
    }

    const counter = reacts.map(react => { return createCounter(react.react_type, react.pet_id.name, react._id) })

    const getAllPost = () => {
        axios.get('http://localhost:8080/all')
            .then(result => {
                dispatch({ type: "LOGIN_SUCCESS", payload: currentUser })
                dispatch({
                    type: "LOAD_ALLPOST", payload: result.data
                })
            }
            )
            .catch(console.log)
    }

    const handleSelect = (emoji) => {
        const index = _.findIndex(counter, { by: currentUser.name })
        let body = {}
        if (location === 'post') {
            body = {
                pet_id: currentUser._id,
                post_id: id,
                react_type: emoji
            }
        } else if (location === 'shared') {
            body = {
                pet_id: currentUser._id,
                shared_id: id,
                react_type: emoji
            }
        } else if (location === 'comment') {
            body = {
                pet_id: currentUser._id,
                comment_id: id,
                react_type: emoji
            }
        }

        if (index === -1) {
            axios.post('http://localhost:8080/reacts/' + location, body)
                .then(() => {
                    getAllPost()
                    setShowSelector(!showSelector)
                })

        } else {
            if (counter[index].emoji === emoji) {
                axios.delete('http://localhost:8080/reacts/' + counter[index].id + '/' + location, body)
                    .then(() => {
                        getAllPost()
                        setShowSelector(!showSelector)
                    })
            } else {
                axios.put('http://localhost:8080/reacts/' + counter[index].id, body)
                    .then(() => {
                        getAllPost()
                        setShowSelector(!showSelector)
                    })
            }
        }
    }

    const handleSharePost = () => {
        axios.post('http://localhost:8080/shared', {
            pet_id: currentUser._id,
            post_id: id
        })
            .then(() => {
                getAllPost()
            })
    }

    return (
        <>
            <div className='buttons-container'>

                {
                    location === "post" &&
                    <Tooltip title=" Share post" >
                        <div className='button-share'>
                            <button className='fashare' onClick={handleSharePost}>
                                <FaShareSquare />
                            </button>
                        </div>
                    </Tooltip>
                }

                {
                    counter.length !== 0 ?
                        <Tooltip title=" Share post" >
                            <PokemonCounter
                                counters={counter}
                                user={currentUser.name}
                                onClick={handleAdd}
                                bg="#fafafa"
                                important={counter.length !== 0 ? reacts.filter(react => react.pet_id.name !== currentUser.name).map(react => react.pet_id.name) : []}
                            /></Tooltip>
                        :
                        <Tooltip title={" React to this " + location} >
                            <div className='button-react'>
                                <button className='fapaw' onClick={handleAdd}>
                                    <FaPaw />
                                </button>
                            </div>
                        </Tooltip>
                    //  <AddReactionIcon 
                    //  style={{cursor: "pointer"}}
                    //  onClick = {handleAdd} />
                }
            </div>
            {
                showSelector &&
                <div style={{ position: 'relative', left: "10px" }}>
                    <PokemonSelector
                        iconSize={25}
                        onSelect={emoji => handleSelect(emoji)}
                    />
                </div>
            }

        </>
    )
}

export default ReactionsComponent