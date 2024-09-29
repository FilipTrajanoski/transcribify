import React from 'react';
import Button from "./Button.jsx";
import {useLogout} from "./useLogout.js";

function LogoutButton(props) {
    const {logout} = useLogout();

    return (
        <Button variation={"secondary"} onClick={logout}>Log out</Button>
    );
}

export default LogoutButton;