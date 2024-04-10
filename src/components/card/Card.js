import React from 'react'
import './Card.css';

const Card = ({ item , addToCartHandler}) => {

    //const { title, author, price, img } = item;

  return (
    <div className='cards'>
          <div className='image_box'>
             <img src={item.img} alt='data_img'/>
          </div>
          <div className='details'>
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>Price - {item.price}</p>
              <button className='btn' onClick={() => addToCartHandler(item)}>Add to Cart</button>
          </div>
    </div>
  )
}

export default Card
