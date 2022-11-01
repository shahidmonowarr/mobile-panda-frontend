import { Button } from '@mui/material';
import React from 'react';
import Accordion from '../../components/Accordions/Accordions';
import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import Specifications from '../../components/Specification/Specifications';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Specifications />
            <h1>This is Home</h1>
            <Button variant="contained">Outlined</Button>
            <Accordion />
            <Brands />
            <Contact />
        </div>
    );
};

export default Home;