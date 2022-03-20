import React from 'react'
import './Product.css'

const Product = ({img , link}) => {
  return (
    <div className='product'>
      <div className="product-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="wesite" className="p-img" />
        </a>
    </div>
  )
}

export default Product