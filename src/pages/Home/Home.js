import { Button } from '@mui/material';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Specifications from '../../components/Specification/Specifications';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Specifications />
            <h1>This is Home</h1>
            <Button variant="contained">Outlined</Button>
            <Contact />
        </div>
    );
};

export default Home;