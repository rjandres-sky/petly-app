import React, { useState } from 'react'

const Comments = () => {

    const [text, setText] = useState('')
    const handleChange = event => {
        setText(event.target.value)
    }
    const addComment = (event) => {
        if (event.keyCode == 13 && event.target.value) {
            event.preventDefault()
            comment({
                userId: 
            })
        }
    }


    return (
        <div>Comments</div>
    )
}

export default Comments