// import React from "react";
// import "../Components/home.css";
// const Home = () => {
//     return (
//         <>
//             <div className="navbar-container">
//                 <div className="navbar">
//                     <ul className="home-links">
//                         <li>Logo</li>
//                         <li>About Us</li>
//                         <li>Contact Us</li>
//                         <li>Login</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;

import React, { useState } from "react";
import {
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import { useHistory, Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Components/home.css";
// import { Header } from "antd/es/layout/layout";
import Logout from "./Logout";
import { auth } from "../firebase";
import { Carousel } from "antd";
import HeaderComp from "./HeaderComp";
import { Button, Popover, Rate } from "antd";
import { PopoverHeader } from "react-bootstrap";

const Home = () => {
    const content1 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            <Rate disabled defaultValue={5} style={{ color: "#43d74f" }} />

            <p className="review-text">
                It was an awesome experience. I enjoyed every bit of it and will
                definitely use it again in the future when the need arises.
            </p>
        </div>
    );
    const content2 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            {/* <Rate disabled defaultValue={5} /> */}
            <Rate allowHalf defaultValue={4.5} style={{ color: "#43d74f" }} />
            <p className="review-text">
                I love how customizable and modern my resume looks. This website
                exceeded my expectations
            </p>
        </div>
    );
    const content3 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            <Rate disabled defaultValue={5} style={{ color: "#43d74f" }} />

            <p className="review-text">
                This website is a must-try for anyone serious about advancing
                their career. It made crafting a professional resume a delight.
            </p>
        </div>
    );

    const content4 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            <Rate disabled defaultValue={5} style={{ color: "#43d74f" }} />

            <p className="review-text">
                Highly recommended! This resume builder elevated my job
                application to the next level.
            </p>
        </div>
    );

    const content5 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            {/* <Rate disabled defaultValue={5} /> */}
            <Rate allowHalf defaultValue={4} style={{ color: "#43d74f" }} />
            <p className="review-text">
                I love how customizable and modern my resume looks. This website
                exceeded my expectations
            </p>
        </div>
    );

    const content6 = (
        <div className="cust_reviews">
            {/* <p>Excellent Tool</p> */}
            {/* <Rate disabled defaultValue={5} /> */}
            <Rate allowHalf defaultValue={4.5} style={{ color: "#43d74f" }} />
            <p className="review-text">
                I used their service recently to write my CV. Easy to use with
                great ideas. I successfully secured an interview for the first
                vacancy I applied for.
            </p>
        </div>
    );
    return (
        <>
            <HeaderComp />

            <div className="home-container">
                <h1 className="home-tagline">
                    Your Dream Job Starts Here: Build Your Winning Resume
                </h1>
                <hr />

                <h4>
                    MyResumeBuilder is lightning fast. There's no software to
                    download. No multi-part sign-up form. No long-winded
                    tutorials. Just a straightforward process.
                </h4>

                <h6>Four simple steps to make your CV </h6>

                {/* <Carousel autoplay>
                    <div className="home_Carousel">
                        <div className=" carousel_text" style={{ flex: 1 }}>
                            <h3 style={contentStyle}>
                                Step 1: Pick a Template Don't sabotage your job
                                search before it has even begun. Choose from our
                                ATS-friendly, hand-crafted resume templates
                            </h3>
                        </div>

                        
                        <div className="carousel_img" style={{ flex: 1 }}>
                            <img
                                src="/template_previews/step1.PNG"
                                alt="step1"
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel> */}
            </div>
            <div className="steps_img_text">
                <div className="steps_text">
                    <div className="steps">1</div>
                    <div className="steps_texts">Pick a Template</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step1.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step2.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text">
                    <div className="steps">2</div>
                    <div className="steps_texts">Customize Your Layout</div>
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_text">
                    <div className="steps">3</div>
                    <div className="steps_texts">Fill in the Blanks</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step3.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step4.PNG"
                        alt="step1"
                        height={190}
                        width={190}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text">
                    <div className="steps">4</div>
                    <div className="steps_texts">Hit 'Download!'</div>
                </div>
            </div>
            <div
                className="home-costomers-main"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <div className="customers-text">
                    <h1>See why customers love MyResumeBuilder</h1>
                </div>
                {/* <div className="customers-imgs"> */}
                <div className="steps_img_text">
                    <div
                        className="cust-imgs-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3,1fr)",
                            gap: "5px",
                            margin: "2px",
                            // border: "1px solid red",
                        }}
                    >
                        <Popover
                            content={content1}
                            title="Anna"
                            trigger="hover"
                        >
                            {/* <Button>Hover me</Button> */}
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img6.jfif"
                            />
                        </Popover>
                        <Popover
                            content={content2}
                            title="Sebastien"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img2.jfif"
                            />
                        </Popover>
                        <Popover
                            content={content3}
                            title="Kathie"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img4.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content4}
                            title="Bradd"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img3.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content5}
                            title="Mahi"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img5.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content6}
                            title="Vimal"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                height={150}
                                width={150}
                                alt="template2"
                                src="/template_previews/cust_img1.jfif"
                            />
                        </Popover>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
