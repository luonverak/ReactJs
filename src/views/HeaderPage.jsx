import React from "react";
import '../style/Header.css';
import { Link } from "react-router-dom";
const HeaderPage = () => {
    return (
        <>
            <div className="page-header">
                <div className="page-logo">
                    <img src="assets/images/logo.png" alt="" />
                </div>
                <div className="page-menu">
                    <ul>
                        <li><Link to="/">Category</Link></li>
                        <li><Link to="/">Deals</Link></li>
                        <li><Link to="/">What's New</Link></li>
                        <li><Link to="/">Delivery</Link></li>
                    </ul>
                </div>
                <div className="searching">

                    <div className="box-searching">
                        <input type="text" name="" id="" placeholder="Search products" />
                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className="auth-card">
                    <div className="auth">
                        <span><i class="fa-regular fa-user"></i> </span>
                        <p>Account</p>
                    </div>
                    <div className="card">
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderPage;