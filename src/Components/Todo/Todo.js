import React from 'react';
import './Todo.css';
import List from './../List/List';

const Todo = () => {
    return (
        <div>
            <h1>Simple To do list app</h1>
            <div>
                <ul className='list'>
                    <List item='Hello World'/>
                    <List item='Hello World'/>
                    <List item='Hello World'/>
                    <List item='Hello World'/>
                    <List item='Hello World'/>
                    <List item='Hello World'/>
                </ul>
            </div>
        </div>
    )
}

export default Todo