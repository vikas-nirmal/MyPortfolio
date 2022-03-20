import React from 'react'
import './Intro.css'
import me from '../../img/me.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-details">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Vikas Nirmal</h1>
                <div className="intro-title">
                    <div className="title">
                        <div className="title-item">MERN Fullstack Devloper</div>
                        <div className="title-item">Frontend Devloper</div>
                        <div className="title-item">Pursuing Next.js</div>
                    </div>
                </div>
                <div className="intro-desc">
                    I am Full stack web developer with more than 150 hours of building, maintaining and deploying single page/eCommerce and many more applications. and I am currently learning next.js which is a full-stack framework (as in, it handles both the frontend and backend of our application)
                </div>
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-bg"></div>
            <img src={me} alt="my-profile" className='intro-img' />

        </div>
    </div>
  )
}

export default Intro
