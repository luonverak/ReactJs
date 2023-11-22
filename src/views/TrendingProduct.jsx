import React from "react";
import '../style/TrendingProduct.css';
const data=[];
const TrendingProduct=()=>{
    for(let i=0;i<2;i++){
        data[i]=<div className="trending-item">
                        <div className="trending-thumbnail">
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png" alt="" />
                        </div>
                        <div className="trending-detail">
                             <h1>Furniture Village</h1>
                            <p>Delivery with in 24 hours</p>
                            <button type="button">Shop Now</button>
                        </div>
                    </div>
    }
    return (
        <>
            <div className="treding-product">
                <div className="trening-title">
                    <h1>Trending Products For You!</h1>
                </div>
                <div className="trending-block">
                    {data}
                </div>
            </div>
        </>
    );
}
export default TrendingProduct;