import React from 'react';
import './List.css'

const List = (props) => {
    const deleteItem = (index) => {
        props.onDeleteList(index)
    }
    return (
        <li className='item'>
            <div className='checkbox'>
                <input type="checkbox" />
            </div>
            <div className='value-item'>
                {props.item}
            </div>
            <a href='#' className='close-button' onClick={() => deleteItem(props.index)}>
                
            </a>
        </li>
    )
}

export default List