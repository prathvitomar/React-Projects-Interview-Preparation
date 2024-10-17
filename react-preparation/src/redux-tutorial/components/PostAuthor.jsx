import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/users/usersSlice';

function PostAuthor({userId}) {
    const allUsers = useSelector(selectAllUsers);
    const isAuthor = Array.isArray(allUsers) ? allUsers.find(user => user.id === userId) : null;

    return (
        <>
        {
            isAuthor ? (
                <div>{isAuthor}</div>
            ) : 
            <div>
            <p>Unknown Author</p>
            </div>
        }
        </>
    )
}

export default PostAuthor