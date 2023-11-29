import React from "react";
import '../../style/IndexPage/BestStore.css';
const data=[];
const BestStore=()=>{
    for(let i=0;i<4;i++){
        data[i]=<div className="store-item">
                        <div className="store-thumbnail">
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png" alt="" />
                            <div className="store-logo">
                                <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png" alt="" />
                            </div>
                        </div>
                        <div className="trending-detail">
                            <h1>Staples</h1>
                            <p>Bag Perfume</p>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
    }
    return (
        <>
            <div className="best-store">
                <div className="store-title">
                    <h1>Best Selling Store</h1>
                </div>
                <div className="store-block">
                    {data}
                </div>
            </div>
        </>
    );
}
export default BestStore;