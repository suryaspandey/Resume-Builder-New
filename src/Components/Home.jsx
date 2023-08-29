import React, { useEffect, useState } from "react";
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
import Footer from "./Footer";
import GifContainer from "./GifContainer";
import { AiOutlineRise } from "react-icons/ai";
import { BiHappyHeartEyes } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";

const Home = () => {
    const history = useHistory();
    const { currentUser } = auth;

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
                <h1
                    className="home-tagline"
                    // style={{ fontSize: "45px" }}
                >
                    Your Dream Job Starts Here: Build Your Winning Resume
                </h1>

                <div
                    className="hr_tg"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <hr
                        style={{
                            marginBottom: "50px",
                            paddingLeft: "50%",
                            borderRadius: "20px",
                            border: "4px solid rgb(121, 133, 132)",
                        }}
                    />
                </div>
                <div className="home-choose-template-details">
                    <div className="home-top-img-section">
                        <h1 className="home-tagline home-subheadings">
                            Build your brand-new resume in as little as
                            <br />5 minutes!
                        </h1>
                        <h5
                            style={{
                                color: "orange",
                                fontSize: "2.25rem",
                                fontFamily: "Nunito Sans",
                                fontWeight: 700,
                            }}
                        >
                            Try it for free!
                        </h5>
                        <div className="contact-form-img">
                            <img
                                src="/template_previews/owl_giffy1.gif"
                                height={200}
                            />
                        </div>

                        {/* {currentUser ? (
                            <>
                                {console.log("button " + currentUser)} */}
                        <button className="save-btn home-btn">
                            <Link
                                to="/choose-template"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                BUILD NOW!
                                <span
                                    className="arrow-span"
                                    // style={{ fontSize: "30px" }}
                                >
                                    &#8594;
                                </span>
                            </Link>
                        </button>
                        {/* </> */}
                        {/* // ) : (
                        //     <Link to="/login"></Link>
                        // )} */}
                    </div>

                    <img
                        className="home-templte-img"
                        src="template_previews/template-details1.PNG"
                        style={{ borderRadius: "70px" }}
                    />
                </div>

                <div className="home-gif-text-container">
                    <div className="gif-text">
                        <h2 className="home-tagline home-subheadings">
                            YOUR FAST AND HASSLE-FREE PATH TO SUCCESS
                        </h2>

                        <h4 className="home-h4-text">
                            {/* <h2>Your Fast and Hassle-Free Path to Success</h2> */}
                            MyResumeBuilder is lightning fast. There's no
                            software to download. No multi-part sign-up form. No
                            long-winded tutorials. Get one step closer to
                            getting hired with a simple and straightforward
                            process!
                        </h4>
                    </div>
                    <div
                        className="gif-container"
                        // style={{ backgroundColor: "rgba(218, 217, 217, 0.47)" }}
                    >
                        {/* <GifContainer /> */}
                        <img
                            src="/template_previews/ezgif.com-video-to-gif.gif"
                            alt=""
                            height={300}
                            width={300}
                        />
                    </div>
                </div>

                <h1 className="home-tagline home-subheadings">
                    Four simple steps to make your CV
                </h1>
            </div>
            <div
                className="hr_tg"
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <hr
                    style={{
                        marginBottom: "50px",
                        paddingLeft: "50%",
                        borderRadius: "20px",
                        border: "4px solid rgb(121, 133, 132)",
                    }}
                />
            </div>
            <div className="steps_img_text">
                <div className="steps_text one">
                    <div className="steps">1</div>
                    <div className="steps_texts">Pick a Template</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step1.PNG"
                        alt="step1"
                        // height={190}
                        // width={190}
                        // style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step2.PNG"
                        alt="step1"
                        // height={190}
                        // width={190}
                        // style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text two">
                    <div className="steps">2</div>
                    <div className="steps_texts">Customize Your Layout</div>
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_text three">
                    <div className="steps">3</div>
                    <div className="steps_texts">Fill in the Blanks</div>
                </div>
                <div className="steps_img">
                    <img src="/template_previews/step3.PNG" alt="step1" />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step4.PNG"
                        alt="step1"
                        // height={190}
                        // width={190}
                        // style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text four">
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
                    backgroundColor: "#dad9d978",
                }}
            >
                <div className="customers-text">
                    <h1>
                        DISCOVER HOW
                        <span style={{ fontStyle: "italic" }}>
                             MYRESUMEBUILDER {}
                        </span>
                        HAS TRANSFORMED JOB APPLICATIONS🤩
                    </h1>
                    <img
                        // src="https://www.pngitem.com/pimgs/m/42-421398_trustpilot-logo-png-transparent-png.png"
                        src="./template_previews/42-421398_trustpilot-logo-png-transparent-png-fotor-bg-remover-2023080513855.png"
                        alt="TrustPilot review"
                        height={100}
                        width={180}
                    />
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
                                // height={150}
                                // width={150}
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
                                // height={150}
                                // width={150}
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
                                // height={150}
                                // width={150}
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
                                // height={150}
                                // width={150}
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
                                // height={150}
                                // width={150}
                                alt="template2"
                                src="/template_previews/cust_img55.jfif"
                            />
                        </Popover>

                        <Popover
                            content={content6}
                            title="Vimal"
                            trigger="hover"
                        >
                            <img
                                className="human-img"
                                // height={150}
                                // width={150}
                                alt="template2"
                                src="/template_previews/cust_img1.jfif"
                            />
                        </Popover>
                    </div>
                </div>
            </div>

            <div
                className="resume_fetures"
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    className="hr_tg"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                ></div>
                <h1 className="home-tagline home-subheadings">
                    Why Use MyResumeBuilder?
                </h1>
                <hr
                    style={{
                        marginBottom: "50px",
                        paddingLeft: "50%",
                        borderRadius: "20px",
                        border: "4px solid rgb(121, 133, 132)",
                    }}
                />

                <div className="resume_features_grid">
                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/free_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>Completely Free</h3>
                            <h6 className="home-h6-text">
                                Enjoy all the robust features of our resume
                                builder without any cost or hidden fees, making
                                it accessible to everyone looking to create a
                                standout resume.
                            </h6>
                        </div>
                    </div>

                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/user_friendly_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>User-friendly Interface</h3>
                            <h6 className="home-h6-text">
                                Create professional resumes effortlessly with
                                our intuitive and user-friendly interface,
                                making the resume-building process a breeze.
                            </h6>
                        </div>
                    </div>

                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/customizable_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>Customizable Templates</h3>
                            <h6 className="home-h6-text">
                                Choose from a diverse range of customizable
                                templates that suit your style and industry,
                                ensuring your resume stands out.
                            </h6>
                        </div>
                    </div>

                    <div className="features_img_text">
                        <div className="feature_img">
                            <img
                                src="./template_previews/edit_feature.PNG"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="feature_text">
                            <h3>Real-time Previews</h3>
                            <h6 className="home-h6-text">
                                Instantly visualize your resume as you edit,
                                ensuring you can fine-tune every detail to
                                perfection.
                            </h6>
                        </div>
                    </div>
                </div>

                <h1 className="home-tagline home-subheadings">Our Impact</h1>
                <hr
                    style={{
                        marginBottom: "50px",
                        paddingLeft: "50%",
                        borderRadius: "20px",
                        border: "4px solid rgb(121, 133, 132)",
                    }}
                />
                <div className="our-impact-container">
                    <div className="flip">
                        <div
                            className="front"
                            style={{ background: "#006370", color: "white" }}
                            // style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                        >
                            <h2>5+</h2>
                            <h1 className="text-shadow">Years of Experience</h1>
                        </div>
                        <div className="back">
                            {/* <h2>Angular</h2> */}
                            <h4>
                                "Over 5+ years of combined experience in resume
                                building and career services."
                            </h4>
                            <AiOutlineRise
                                style={{
                                    fontSize: "52px",
                                    background: "white",
                                    color: "black",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flip">
                        <div
                            className="front"
                            // style={{ background: "yellow" }}
                            style={{ background: "#dad9d9", color: "#006370" }}

                            // style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                        >
                            <h2> 90%</h2>
                            <h1 className="text-shadow">Client Achievements</h1>
                        </div>
                        <div className="back">
                            {/* <h2>Angular</h2> */}
                            <h4>
                                "Helped clients secure interviews at top
                                companies with an 85% success rate."
                            </h4>

                            <BiHappyHeartEyes
                                style={{
                                    fontSize: "52px",
                                    background: "white",
                                    color: "black",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flip">
                        <div
                            className="front"
                            // style={{ background: "blue" }}
                            // style={{ background: "#f2f2f2", color: "#006370" }}

                            style={{ background: "#dad9d9", color: "#006370" }}

                            // style="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                        >
                            <h2> 50+ </h2>
                            <h1 className="text-shadow">Resume Templates</h1>
                        </div>
                        <div className="back">
                            {/* <h2>Angular</h2> */}
                            <h4>
                                "Choose from a selection of 50+ professionally
                                designed resume templates."
                            </h4>
                            <HiTemplate
                                style={{
                                    fontSize: "52px",
                                    background: "white",
                                    color: "black",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>

                    <div className="flip">
                        <div
                            className="front"
                            // style={{ background: "orange" }}
                            // style={{ background: "#dad9d9", color: "#006370" }}

                            style={{ background: "#006370", color: "white" }}

                            // style="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)"
                        >
                            <h2> 10,000+ </h2>
                            <h1 className="text-shadow">Satisfied Customers</h1>
                        </div>
                        <div className="back">
                            {/* <h2>Angular</h2> */}
                            <h4>
                                "Join our community of 10,000+ satisfied users
                                who have landed their dream jobs."
                            </h4>
                            <FaUsers
                                style={{
                                    fontSize: "52px",
                                    background: "white",
                                    color: "black",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* {currentUser ? (
                    <>
                        {console.log("button " + currentUser)}
                        <button className="save-btn">
                            <Link
                                to="/choose-template"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                TRY RESUME BUILDER NOW!
                            </Link>
                        </button>
                    </>
                ) : (
                    <Link to="/login"></Link>
                )} */}

                <button className="save-btn">
                    <Link
                        to="/choose-template"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        TRY RESUME BUILDER NOW!
                    </Link>
                </button>
            </div>

            <Footer />
        </>
    );
};
export default Home;
