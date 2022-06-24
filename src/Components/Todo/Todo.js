import React from 'react';
import './Todo.css';
import List from './../List/List';
import {useState} from 'react';


const Todo = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const deleteList = (index) => {
        const current = list.slice()
        current.splice(index, 1)
        setList([...current]);
    }
    return (
        <div>
            <h1>Simple To do list app</h1>
            <div className='input-field'>
                <input type="text" className='input' onChange={(event) =>  setInput(event.target.value)} />
                <input type="submit" className='button-add' value='Tambah' onClick={() => input.length > 0 ? setList([...list, {status:false, value:input}]) : undefined} />
            </div>
            <div>
                <ul className='list'>
                    {list.map((item, index) => (<List item={item.value} index={index} onDeleteList={deleteList} />))}
                </ul>
            </div>
        </div>
    )
}
export default Todo