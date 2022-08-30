import React from "react";
import authGuard from "../../HOC/authGuard";

const Dashboard = () =>
{
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
};

export default authGuard(Dashboard);