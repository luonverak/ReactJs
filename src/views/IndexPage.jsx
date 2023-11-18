import React from "react";
import TopCategory from "./TopCategory";
import SlideShow from './SlideShow';
import ForYou from "./ForYou";
import ChooseBrand from "./ChooseBrand";
const IndexPage=()=>{
    return (
        <>
            <SlideShow />
            <TopCategory/>
            <ForYou/>
            <ChooseBrand/>
        </>
    );
}
export default IndexPage;