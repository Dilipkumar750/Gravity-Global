import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
    }, []);

    return (
        <>
            <Hero />
        </>
    )
}

export default Home
