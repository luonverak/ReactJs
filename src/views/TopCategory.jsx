import React from "react";
import '../style/TopCategory.css'
const data = [];
const TopCategory=()=>{
    for (let i = 0; i < 6; i++) {
        data[i] =
            <div className="item-category">
                <h1>Furniture</h1>
                <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png" alt="" />
            </div>
    }
    return (
        <>
            <div className="top-category">
                <div className="title-category">
                    <h1>Shop Our Top Categories</h1>
                </div>
                <div className="all-category"  >
                    {data}
                </div>
            </div>
        </>
    );
}
export default TopCategory;