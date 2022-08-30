import React from "react";

 function authGuard(WrappingComponent)
{

    return() =>
    {
        let token =  localStorage.getItem('token');
        if(!token)
        {
            return <h1>Access denied</h1>
        }
        else{
            return (
                <WrappingComponent />
            )
        }
    }

}

export default authGuard;