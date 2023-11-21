import React from "react";
import TopCategory from "./TopCategory";
import SlideShow from './SlideShow';
import ForYou from "./ForYou";
import ChooseBrand from "./ChooseBrand";
import Discount from "./Discount";
import WeaklyPopular from "./WeaklyPopular";
import Banner2 from "./Banner2";
import BestDeal from "./BestDeal";
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
        </>
    );
}
export default IndexPage;