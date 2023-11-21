import React from "react";
import '../style/BestDeal.css';
const button=[];
const data=[];
const BestDeal=()=>{
    for(let i=0;i<8;i++){
        button[i]=<button type="button">Fashion</button>
    }
    for(let i=0;i<8;i++){
        data[i]=<div className="best-item">
                        <div className="best-thumbnail">
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png" alt="" />
                        </div>
                        <div className="best-detail">
                            <div className="best-name">
                                <h1>Laptop sleeve MacBook</h1>
                                <h1> <sup>$ </sup> 20.0</h1>
                            </div>
                            <div className="decription-best">
                                <p>Organic Cotton, fairtrade certified </p>
                            </div>
                            <div className="button-add-cart">
                                <button type="button">Add to cart</button>
                            </div>
                        </div>
                    </div>
    }
    return (
        <>
            <div className="best-deal">
                <div className="title">
                    <h1>Todays Best Deals For You!</h1>
                </div>
                <div className="category">
                    {button}
                </div>
                <div className="block-item">
                    {data}
                </div>
            </div>
        </>
    );
}
export default BestDeal;