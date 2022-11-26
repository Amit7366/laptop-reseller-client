import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthPovider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Welcome, {user.displayName}</h2>
        </div>
    );
};

export default Dashboard;