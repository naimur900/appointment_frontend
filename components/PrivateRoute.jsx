import React from 'react'
import React, { useEffect, useState } from 'react';
import API from '../utilities/api';
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await API.get("/user");
                setAuthenticated(true);
            } catch {
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        verifyToken();
    }, []);

    if (loading) return <p>Loading...</p>;
    return authenticated ? children : <Navigate to="/login" />;
}
