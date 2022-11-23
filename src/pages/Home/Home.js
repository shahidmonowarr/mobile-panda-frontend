import React from 'react';
import Accordion from '../../components/Accordions/Accordions';
import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import Footer from '../../components/shares/Footer/Footer';
import Header from '../../components/shares/Header/Header';
import Specifications from '../../components/Specification/Specifications';
import Reviews from '../AllReviews/Reviews/Reviews';
import Services from '../AllServices/Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <Specifications />
            <Services />
            <Accordion />
            <Brands />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;