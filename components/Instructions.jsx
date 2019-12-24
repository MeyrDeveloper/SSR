import React from 'react'

const Instructions = ({title, steps}) => (
    <section className="instructions">
        <h2>{title}</h2>
        {
            steps.map((item, i) => (
                <p key={i}>{item}</p>
            ))
        }
    </section>
)

export default Instructions