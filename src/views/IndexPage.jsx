import React from "react";
import SlideShow from "./IndexPage/SlideShow";
import TopCategory from "./IndexPage/TopCategory";
import ForYou from "./IndexPage/ForYou";
import ChooseBrand from "./IndexPage/ChooseBrand";
import Discount from "./IndexPage/Discount";
import WeaklyPopular from "./IndexPage/WeaklyPopular";
import Banner2 from "./IndexPage/Banner2";
import BestDeal from './IndexPage/BestDeal';
import CashBack from './IndexPage/CashBack';
import MostSelling from "./IndexPage/MostSelling";
import TrendingProduct from './IndexPage/TrendingProduct';
import BestStore from './IndexPage/BestStore';
import ServiceShop from './IndexPage/ServiceShop';
const IndexPage=()=>{
    return (
        <>
            <SlideShow />
            <TopCategory/>
            <ForYou/>
            <ChooseBrand/>
            <Discount/>
            <WeaklyPopular/>
            <Banner2/>
            <BestDeal/>
            <CashBack/>
            <MostSelling/>
            <TrendingProduct/>
            <BestStore/>
            <ServiceShop/>
        </>
    );
}
export default IndexPage;