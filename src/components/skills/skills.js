import React from 'react'
import './skills.css'

const skills = () => {
  return (
    <div className='body'>
        <h1>My Skills</h1>
        <div className="skills">
            <div className="skill">
                <div className="skill-name">
                    React.js
                </div>
                <div className="skills-bar">
                    <div className="skill-per" per="80" style={{maxWidth: "80%"}} ></div>
                </div>
            </div>
            <div className="skill">
                <div className="skill-name">
                    HTML
                </div>
                <div className="skills-bar">
                    <div className="skill-per" per="70" style={{maxWidth: "70%"}} ></div>
                </div>
            </div>
            <div className="skill">
                <div className="skill-name">
                    CSS
                </div>
                <div className="skills-bar">
                    <div className="skill-per" per="50" style={{maxWidth: "50%"}} ></div>
                </div>
            </div>
            <div className="skill">
                <div className="skill-name">
                    Node.js
                </div>
                <div className="skills-bar">
                    <div className="skill-per" per="65" style={{maxWidth: "65%"}} ></div>
                </div>
            </div>
            <div className="skill">
                <div className="skill-name">
                    express.js
                </div>
                <div className="skills-bar">
                    <div className="skill-per" per="70" style={{maxWidth: "70%"}} ></div>
                </div>
            </div>
            <div className="skill">
                <div className="skill-name">
                    MongoDB
                </div>
                <div className="skills-bar">
                    <div className="skill-per" per="80" style={{maxWidth: "80%"}} ></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills