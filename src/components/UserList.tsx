import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface SelectStyles {
    width?: string;
    height?: string;
    padding: string;
    border: string;
}

interface UserlistProps {
    users:IUser[]

}

const UserList: FC <UserlistProps> = ({users}) => {

    return (
        <div>
            {users.map(user =>
                    <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;