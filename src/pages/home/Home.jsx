import React from 'react'
import { Head } from './homeComponent';
import GreyBorder from "./homeComponent/GreyBorder";
import AssetManagement from "./homeComponent/AssetManagement";
import WeSetThePace from "./homeComponent/WeSetThePace";
import StartYourInvestment from "./homeComponent/StartYourInvestment";
import ChooseYourInvestment from "./homeComponent/ChooseYourInvestment";
import TimeTestedInvestment from "./homeComponent/TimeTestedInvestment";
import Banner2 from "./homeComponent/Banner2";
import Reviews from "./homeComponent/Reviews";
import GetInTouchBanner from "./homeComponent/GetInTouchBanner";
// import SocialIcons from "./homeComponent/SocialIcons";

const Home = () => {
  return (
    <div className="bg-white">
        <Head />
        <GreyBorder />
        <AssetManagement />
        <WeSetThePace />
        <StartYourInvestment />
        <ChooseYourInvestment />
        <TimeTestedInvestment />
        <Banner2 />
        <Reviews />
        <GetInTouchBanner />
        {/* <SocialIcons /> */}
    </div>
  )
}

export default Home;