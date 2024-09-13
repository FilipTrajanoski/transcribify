import React from 'react';

function User({user}) {
    return (
        <div>
            <img src={user.image} alt={"..."}/>
            <span>{user.firstName} {user.lastName}</span>
        </div>
    );
}

export default User;