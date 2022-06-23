import React from 'react';
import './List.css'

const List = (props) => {
    return (
        <li className='item'>
            <div className='checkbox'>
                <input type="checkbox" />
            </div>
            <div className='value-item'>
                {props.item}
            </div>
            <a href='#' className='close-button'>
                
            </a>
        </li>
    )
}

export default List