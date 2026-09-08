import React from "react";
import img from '../assets/img1.jpeg'


const Home = () => {
    return (
        <>
            <div className="container-fluid descrip-tion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-12 First">
                            <i className="fa-solid fa-leaf icon1"></i>
                            <h1>Reduce Food Waste</h1>
                            <h2>We collect surplus food from<br />restaurants, stores and farms.</h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Second">
                            <i class="fa-solid fa-users icon2"></i>
                            <h1>Support Communities</h1>
                            <h2>We distributes nutritious food<br />to those in need.</h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i class="fa-solid fa-arrows-spin icon3"></i>
                            <h1>Create a Sustainable Future</h1>
                            <h2>Less waste means a healtier<br />planet.</h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Forth">
                            <i class="fa-regular fa-heart icon4"></i>
                            <h1>Build Awareness</h1>
                            <h2>We educate and inspire<br />for lasting change.</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 F1">
                        <img src={img} alt="image" height={"400px"} width={"450px"}/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 F2">
                        <h2>About us</h2>
                        <h1>Turning Surplus into <b>Smiles</b></h1>
                        <p>Food for Tomorrow is a non-profit organisation focused on food waste management and community support. We work with business, farmers, and local partners to rescue edible surplus food and redistribute it to people in need, while also promoting sustainable practices and awareness about food waste.</p>
                        <button className="bttn bttn">Our mission  <i className="fa-solid fa-arrow-right icn"></i></button>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 Ft">
                            <h3>our impact</h3>
                            <h1>Real Food. Real Change.</h1>
                            <h2>Every meal saved makes a difference - for people and the planet</h2>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 Sd">
                            <i className="fa-solid fa-bowl-rice icn1"></i>
                            <h1>12,500+</h1>
                            <h2>Meals Distributed</h2>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 Td">
                            <i className="fa-solid fa-users icn2"></i>
                            <h1>8+</h1>
                            <h2>Partner Organisations</h2>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 Frth">
                            <i className="fa-brands fa-envira icn3"></i>
                            <h1>6,800+ kg</h1>
                            <h2>Food Saved</h2>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-12 Fth">
                            <i className="fa-brands fa-pagelines icn4"></i>
                            <h1>3+</h1>
                            <h2>Communities Supported</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home