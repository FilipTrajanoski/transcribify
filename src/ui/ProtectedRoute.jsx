import React, {useEffect, useRef} from 'react';
import {isAuthenticated} from "./isAuthenticated.js";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const authenticated = isAuthenticated();

    useEffect(function (){
        if(!authenticated ){
            toast("Please log in to use this function", {
                icon: '🔒',
                duration: 3000
            });
            navigate("/login");
        }
    }, [authenticated, navigate])

    return (
        authenticated ? children : null
    );
}

export default ProtectedRoute;