import React from 'react'
import Product from '../product/Product'
import './productList.css'
import {products} from '../../data'

const productList = () => {
  return (
    <div className='product-list'>
        <div className="pl-text">
          <h1 className="pl-title">Projects</h1>
          <p className="pl-desc">
            Here is some of my creative projects and works on frontend , mern fullstack and on javascript and whole lot more inside.
           </p>
        </div>
        <div className="pl-list">
          {products.map(item=>(
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
    </div>
  )
}

export default productList