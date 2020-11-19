import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"

function Story({image, profileSrc, title }) {
    return (
        <div className= "story" src={image}>
            <Avatar className="story__avatar" src= {profileSrc} />
            <h4>{title}</h4>
            
        </div>
    )
}

export default Story
