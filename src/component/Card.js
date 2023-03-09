import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <>
            <div className="main">
                <ul className='cards'>
                    <li className="cards_item">
                        <div className='card'>
                            <p className='title'><span>TOTAL </span>RECOVERED</p>
                            <p className='info'>{props.data.recovered}</p>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className='card'>
                            <p className='title'><span>TOTAL </span>CONFIRMED</p>
                            <p className='info'>{props.data.confirmed}</p>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className='card'>
                            <p className='title'><span>TOTAL </span>DEATH</p>
                            <p className='info'>{props.data.deaths}</p>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className='card'>
                            <p className='title'><span>TOTAL </span>ACTIVE</p>
                            <p className='info'>{props.data.active}</p>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className='card'>
                            <p className='title'><span>LAST </span>UPDATED</p>
                            <p className='info'>{props.data.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
