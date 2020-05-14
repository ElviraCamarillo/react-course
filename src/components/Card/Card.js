import  React from 'react'
import './Card.css'

function Card({
  category,
  title,
  description,
  author,
  publicationDate,
  readTime,
  imgUrl
}) {
    return(
        <div className='Card'>
          <div className='Card-content'>
          <p className='Card-category'>{category}</p>
          <h3 className='Card-title'>{title}</h3>
          <p className='Card-description'>{description}</p>
          <p className='Card-author'>{author}</p>
          <p className='Card-date'>{publicationDate}, {readTime}</p>
          </div>
          <div className='Card-image'>
            <a style={{ backgroundImage: `url(${imgUrl })` }} />
          </div>
        </div>
    )
}

export default Card;
