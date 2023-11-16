import React from "react";
import TopCategory from "./TopCategory";
import SlideShow from './SlideShow';
import ForYou from "./ForYou";
const IndexPage=()=>{
    return (
        <>
            <SlideShow />
            <TopCategory/>
            <ForYou/>
        </>
    );
}
export default IndexPage;