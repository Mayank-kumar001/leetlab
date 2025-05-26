import { color } from 'motion/react';
import React from 'react'

const difficultyTagData = [
    {
        difficulty: "EASY",
        bg: "rgba(0, 153, 255, 0.14)",
        borderBg: "#0D71BD"
    },
    {
        difficulty: "MEDIUM",
        bg: "rgba(242, 255, 0, 0.14)",
        borderBg: "#C1A90F"
    },
    {
        difficulty: "HARD",
        bg: "rgba(255, 55, 0, 0.14)",
        borderBg: "#B2130D"
    },
]

function TagComponent({children}) {
    let bg = "#4b4b4b24";
    let borderBg = "#4f4d50";
    let color = "#e7e1e1"

    difficultyTagData.forEach(element => {
        if(element.difficulty === children ){
            bg = element.bg
            borderBg = element.borderBg
            color = borderBg
        }
    });
    return (
        <span className='px-5 py-0.5 rounded-2xl text-sm font-semibold' style={{
            backgroundColor: bg,
            border: `2px solid ${borderBg}`, 
            color: color
        }}>{children}</span>
    )
}

export default TagComponent