import React from "react";
import '../../style/IndexPage/ForYou.css';
const data=[];

const ForYou=()=>{
    for(let i=0;i<6;i++){
        data[i]=<div className="item-foryou">
                    <div className="thumbnail-item">
                        <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png" alt=""/>
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
            <div className="foryou">
                <div className="title-foryou">
                    <h1>Todays Best Deals For You!</h1>
                </div>
                <div className="show-foryou">
                    {data}
                </div>

            </div>
        </>
    );
}
export default ForYou;