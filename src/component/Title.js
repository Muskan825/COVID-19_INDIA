import React from 'react';
import './Title.css';

export default function Title(props) {
    return (
        <>
            <div className='sta'>
                <p className='sp'><span>OUR </span>STATE</p>
                <p className='num'>{props.data.state}</p>
            </div>
        </>
    )
}
