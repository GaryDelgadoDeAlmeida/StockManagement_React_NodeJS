import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={"menu"}>
            <div className={"menu-logo"}>
                <div className={"logo"}>
                    <img src="/content/images/logo.png" alt="" />
                    <span>Stock Management</span>
                </div>
            </div>

            <ul className={"menu-items"}>
                <li className={"menu-item"}>
                    <Link to={"/"}>
                        <img src="/content/svg/white/house.svg" alt=""/>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <Link to={"/products"}>
                        <img src="/content/svg/white/laptop.svg" alt=""/>
                        <span>Products</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <Link to={"/sales"}>
                        <img src="/content/svg/white/cart-shopping.svg" alt="" />
                        <span>Sales</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <Link to={"/customers"}>
                        <img src="/content/svg/white/users.svg" alt="" />
                        <span>Customers</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <Link to={"/providers"}>
                        <img src="/content/svg/white/truck.svg" alt="" />
                        <span>Providers</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <Link to={"/employees"}>
                        <img src="/content/svg/white/address-card.svg" alt="" />
                        <span>Employees</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <Link to={"/payments"}>
                        <img src="/content/svg/white/sack-dollar.svg" alt="" />
                        <span>Payments</span>
                    </Link>
                </li>
                <li className={"menu-item"}>
                    <button>
                        <img src="/content/svg/white/power-off.svg" alt="" />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </header>
    )
}