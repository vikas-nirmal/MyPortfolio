import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className="sectionfooter">
        <div className="footer">
            <div className="social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <p className='copyright' >
                Vikas Kumar Nirmal © 2022
            </p>
        </div> 
    </div>
  )
}

export default footer