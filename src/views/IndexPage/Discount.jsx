import React from "react";
import '../../style/IndexPage/Discount.css';
const data = [];
const Discount=()=>{
    for(let i=0;i<4;i++){
        data[i]=<div className="item-discount">
                        <div className="detail">
                            <h1>Save</h1>
                            <h1> <sup>$</sup>100</h1>
                            <p>Explore Our Furniture & Home Furnishing Range</p>
                        </div>
                        <div className="thumbnail">
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" />
                        </div>
                    </div>
    }
    return (
        <>
            <div className="discount">
                <div className="discount-title">
                    <h1>Get Up To 70% Off</h1>
                </div>
                <div className="discount-block">
                    {data}
                </div>
            </div>
        </>
    );
}
export default Discount;