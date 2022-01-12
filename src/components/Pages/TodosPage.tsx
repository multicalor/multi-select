import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../../types/types";
import axios from "axios";
import List from "../UI/Out/List";
import TodoItem from "../TdoItem";

const TodosPage:FC = ({children}) => {
    const [todos, setTodos] = useState<ITodo[]>([])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?limit=10')
            setTodos(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchTodos()
    }, [])

    return (
        <div>
            {children}
            <List items={todos} renderItem={(todo:ITodo)=> <TodoItem todo={todo} key={todo.id}/>}></List>
        </div>
    );
};

export default TodosPage;