import React from 'react';
import Banner from './homeComponents/Banner';
import About from './homeComponents/About';
import Services from './homeComponents/services/Services';

const Home = () => {
    return (
        <div className='w-full mx-auto container'>
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default Home;