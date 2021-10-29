import React from 'react';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';
import "./Home.css"
import Special from './Special/Special';
import Charity from './Charity/Charity';

const Home = () => {
    //extra two section for bonus marks
    return (
        <div className="home">
            <TopBanner></TopBanner>
            <Services></Services>
            <Special></Special>
            <Charity></Charity>
        </div>
    );
};

export default Home;

//--------------------THANKS TO YOU FOR YOUR TIME AND SUPPORT---------------