import React from 'react';
import './Todo.css';
import List from './../List/List';
import {useState} from 'react';


const Todo = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    return (
        <div>
            <h1>Simple To do list app</h1>
            <div className='input-field'>
                <input type="text" className='input' onChange={(event) =>  setInput(event.target.value)} />
                <input type="submit" className='button-add' value='Tambah' onClick={() => setList([...list, input])} />
            </div>
            <div>
                <ul className='list'>
                    {list.map((item) => (<List item={item} />))}
                </ul>
            </div>
        </div>
    )
}
export default Todo