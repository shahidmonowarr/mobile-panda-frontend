import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopBtn(true);
            } else {
                setBackToTopBtn(false);
            }
        });
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            {
                backToTopBtn && (
                    <Button onClick={scrollToTop} className='scroll-top' >^</Button>
                )
            }
        </div>
    );
};

export default BackToTop;