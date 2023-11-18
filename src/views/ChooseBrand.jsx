import React from "react";
import '../style/ChooseBrand.css';
const data=[];
const ChooseBrand=()=>{
    for(let i=0;i<8;i++){
        data[i]=<div className="item">
                        <div className="logo">
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" alt="" />
                        </div>
                        <div className="name">
                            <h1>Staples</h1>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
    }
    return (
        <>
            <div className="choose-brand">
                <div className="brand-title">
                    <h1>Choose By Brand</h1>
                </div>
                <div className="brand-item">
                    {data}
                </div>
            </div>
        </>
    );
}
export default ChooseBrand;