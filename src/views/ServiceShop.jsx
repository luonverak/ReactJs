import React from "react";
import '../style/ServiceShop.css';
const data=[];
const ServiceShop=()=>{
    for(let i=0;i<3;i++){
        data[i]=<div className="service-item">
                        <div className="service-detail">
                            <h1>Online Payment <br /> Process</h1>
                            <p>Updates on safe Shopping in our Stores</p>
                        </div>
                        <div className="service-thumbnail">
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png" alt="" />
                        </div>
                    </div>
    }
    return (
        <>
            <div className="service-shop">
                <div className="service-title">
                    <h1>Services To Help You Shop</h1>
                </div>
                <div className="service-block">
                {data}
                </div>
            </div>
        </>
    );
}
export default ServiceShop;