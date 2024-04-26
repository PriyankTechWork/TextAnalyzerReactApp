import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>About Us</h1>
        </div>
    )
}
