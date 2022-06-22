import React from 'react';
import './List.css'

const List = (props) => {
    return (
        <li className='item'>{props.item}</li>
    )
}

export default List