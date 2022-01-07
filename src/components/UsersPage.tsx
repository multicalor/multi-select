import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./UI/Out/List";
import UserItem from "./UserItem";

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])


    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(()=>{
        fetchUsers()
    }, [])
    return (
        <List items={users} renderItem={(user:IUser)=> <UserItem user={user} key={user.id}/>}></List>
    );
};

export default UsersPage;