import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <artice className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                {
                    readMore
                        ? <p>{info} <button onClick={() => { setReadMore(!readMore) }}>{readMore ? '隱藏內容' : null}</button></p>
                        : <p>{info.substring(0, 200)}...<button onClick={() => { setReadMore(!readMore) }}>{readMore ? null : '了解更多'}</button></p>
                }
                <button onClick={() => { removeTour(id) }} className='delete-btn'>刪除</button>
            </footer>
        </artice >
    )
}

export default Tour