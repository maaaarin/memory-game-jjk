import React from 'react'

const Card = ({card, onSelectCard}) => {
  return (
    <li className='card' value={card} onClick={onSelectCard}>
        <div className="card-front">
          <img src="/images/emblem.png" alt='card-thumbnail'/>
        </div>
        <div className="card-back">
          <img src={`/images/${card}.png`} alt='card-thumbnail'/>
        </div>

    </li>
  )
}

export default Card