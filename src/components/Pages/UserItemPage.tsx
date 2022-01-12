import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams {
    id:string;
}

const UserItemPage:FC<UserItemPageParams    > = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchUser()
    }, [])

    return (
        <div>
            <button onClick={() => navigate()}>Back</button>
            <h1>Страница пользователя {user?.name} </h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;