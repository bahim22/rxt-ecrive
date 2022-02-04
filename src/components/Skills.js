import { ChipIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { skills } from '../data'

const Skills = () => {
return (
    <section>
        <div>
        <div>
            <ChipIcon />
            <h1></h1>
            <p></p>
        </div>
        <div>
            {skills.map((skill) => (
                <div></div>
            ))}
        </div>
        </div>
    </section>
)
}

export default Skills

