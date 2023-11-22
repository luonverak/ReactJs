import React from "react";
import '../style/MostSelling.css';
const data=[];
const MostSelling=()=>{
    for(let i=0;i<6;i++){
        data[i]=<div className="item-popular">
                    <div className="thumbnail-item">
                        <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6eaf85336ce58cf03_instax%20mini%2011-min.png" alt=""/>
                    </div>
                    <div className="item-name">
                        <h1>HomePod mini</h1>
                        <h1>$239.00</h1>
                    </div>
                    <div className="item-detail">
                        <p>
                            Table with air purifier, stained veneer/blackTable with air purifier, stained veneer/blackTable with air purifier, stained veneer/blackTable with air purifier, stained veneer/black
                        </p>
                    </div>
                    <div className="add-to-cart">
                        <button type="button">Add to Cart</button>
                    </div>

                </div>
    }
    return (
        <>
            <div className="most-selling">
                <div className="title-foryou">
                    <h1>Most Selling Products</h1>
                </div>
                <div className="show-foryou">
                    {data}
                </div>

            </div>
        </>
    );
}
export default MostSelling;