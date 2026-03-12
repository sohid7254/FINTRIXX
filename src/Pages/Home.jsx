import React from 'react';
import PromoSection from '../Components/PromoSection';
import StatisTics from '../Components/StatisTics';
import OurStory from '../Components/OurStory';
import Value from '../Components/Value';
import Services from '../Components/Services';

const Home = () => {
    return (
        <div>
            <PromoSection/>
            <StatisTics/>
            <OurStory/>
            <Value/>
            <Services/>
        </div>
    );
};

export default Home;