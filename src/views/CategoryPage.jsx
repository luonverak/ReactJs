import React, { useState } from "react";
import "../style/CategoryPage.css";
import IndexPage from "./IndexPage";
const CategoryProduct = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle=()=> {
        setIsOpen((isOpen) => !isOpen);
    }
    return (
        <>
            <div className="category-page">
                <h1>Category</h1>
                {isOpen && <IndexPage />}
                {
                    toggle
                }
            </div>

        </>
    );
};
export default CategoryProduct;
