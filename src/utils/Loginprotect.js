import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Loginprotect({children}) {
    const [login,setLogin] = useState(false)
    const navigate = useNavigate()
    const checkLoginUser = () => {
        const getUser = localStorage.getItem("auth-token")
        if(getUser){
            setLogin(true)
            navigate("/")
        }else{
            setLogin(false)
            navigate("/login")
        }
    }
    useEffect(() => {
        checkLoginUser()
    },[login])
    return <React.Fragment>{login ? children : null}</React.Fragment>;
}

export default Loginprotect
