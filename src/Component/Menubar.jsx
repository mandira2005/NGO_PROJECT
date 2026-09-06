import React from "react";
import Logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";


const MenuBar = () => {
    return (
        <>
             <div className="container-fluid header-menu">
                <div className="row">
                    <div className="col-md-1 col-lg-1 col-sm-12">
                        <div className="logo mt-2">
                            <img src={Logo} alt='Logo' height={"70px"} width={"90px"} />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <div className="menu-area">
                            <center>
                                <nav>
                                    <ul>
                                        <li><NavLink to={'/Home'} className={'menutab'}>Home</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>About us</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>HOW IT WORKS</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>FIND FOOD</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>GET INVOLVED</NavLink></li>
                                    </ul>
                                </nav>
                            </center>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 top-right">
                            <button className="btn btn">Register</button>
                            <button className="btn btn">Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MenuBar