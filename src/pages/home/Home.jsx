import React from 'react'
import { Head } from './homeComponent';
import GreyBorder from "./homeComponent/GreyBorder";
import AssetManagement from "./homeComponent/AssetManagement";
import WeSetThePace from "./homeComponent/WeSetThePace";
import StartYourInvestment from "./homeComponent/StartYourInvestment";
import ChooseYourInvestment from "./homeComponent/ChooseYourInvestment";

const Home = () => {
  return (
    <div className="bg-white">
        <Head />
        <GreyBorder />
        <AssetManagement />
        <WeSetThePace />
        <StartYourInvestment />
        <ChooseYourInvestment />
    </div>
  )
}

export default Home;