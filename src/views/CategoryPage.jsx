import React from "react";
import '../style/CategoryPage.css'
let data =[];
const CategoryProduct = () => {
    for (let i = 0; i < 6; i++) {
        data[i] =
            <div className="item-category">
                <h1>Furniture</h1>
                <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png" alt="" />
            </div>

    }
    return (
        <>
            <div className="category-block">
                <div className="title-category">
                    <h1>Shop Our Top Categories</h1>
                </div>
                <div className="all-category"  >
                    {data}
                    {/* <div className="item-category">
                        <h1>Furniture</h1>
                        <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png" alt="" />
                    </div> */}
                </div>
            </div>
        </>
    );
}
export default CategoryProduct;