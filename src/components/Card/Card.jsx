import React from 'react'
import './Card.scss'

const Card = ({title="Пока не указано" , photo="/gif.1.gif" , price="Цена не выстовлена"}) => {
  return (
   <>
   <div className="card">
            <img src={photo} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
            <button>Купить</button>
        </div>
   </>
  )
}

export default Card