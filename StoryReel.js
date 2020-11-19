import React from 'react'
import Story from './Story'
import "./StoryReel.css"
import Beatles2 from "./images/Beatles2.png"
import pink_floyd from "./images/pink_floyd.jpg"
import ledzepfinal from "./images/ledzepfinal.png"
import Violin from "./images/Violin.jpg"
import Hozier from "./images/hozier.png"

function StoryReel() {
    return (
        <div className= 'storyReel'>
            <Story
            image= {Beatles2}
            profileSrc={Beatles2}
            title= "Beatles" />
             <Story
            image= {pink_floyd}
            profileSrc={pink_floyd}
            title= "Pink Floyd" />
             <Story
            image= {ledzepfinal}
            profileSrc={ledzepfinal}
            title= "Led Zeppelin" />
             <Story
            image= {Violin}
            profileSrc={Violin}
            title= "Violin" />
             <Story
            image= {Hozier}
            profileSrc={Hozier}
            title= "Hozier" />
        </div>
    )

    }
export default StoryReel
