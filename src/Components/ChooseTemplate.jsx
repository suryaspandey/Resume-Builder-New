import { React, useEffect, useState } from "react";
import { Card, Layout, Space } from "antd";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase";

const { Meta } = Card;
const { Header, Sider, Content } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import BasicInfoTemplate1 from "./Template1/BasicInfoTemplate1";
import BasicInfoTemplate2 from "./Template2/BasicInfoTemplate2";
import HeaderComp from "./HeaderComp";
import "../Components/home.css";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import Footer from "./Footer";
import { TbDiscountCheckFilled } from "react-icons/tb";

// import templateImage from "../template_previews/template_preview1.PNG";
const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    // textAlign: "justify",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#006370",
    paddingTop: "15px",
};
const contentStyle = {
    textAlign: "center",
    minHeight: 100,
    // justifyContent: "center",
    // lineHeight: "120px",
    // color: "#fff",
    // backgroundColor: "#f2fafb",
};

const ChooseTemplate = ({ handleTemplateSelect }) => {
    const history = useHistory();
    const { currentUser } = auth;

    useEffect(() => {
        if (!currentUser) {
            history.push("/login");
        }
    }, [currentUser, history]);

    const handleCardClick = (templateName) => {
        handleTemplateSelect(templateName);
        history.push(`/home/${templateName}`);
    };

    const handleComingSoonPg = () => {
        history.push("/coming-soon");
    };

    return (
        <>
            <Space
                direction="vertical"
                style={{
                    width: "100%",
                }}
                size={[0, 48]}
            >
                <Layout>
                    <HeaderComp />

                    <Content style={contentStyle}>
                        <>
                            <>
                                <div className="home-headings">
                                    <div className="choose-resume-text">
                                        <h4
                                            className="choose-template-main-heading-h4"
                                            style={{
                                                fontFamily: "Oswald",
                                                fontSize: "40px",
                                                paddingLeft: "10px",
                                            }}
                                        >
                                            Explore our collection of
                                            professionally designed resume
                                            templates to kickstart your resume
                                            building journey
                                        </h4>
                                        <h4
                                            className="choose-template-main-heading-h4"
                                            style={{
                                                paddingTop: "5px",
                                            }}
                                        >
                                            Our CV templates prioritize your
                                            success
                                        </h4>
                                        <div
                                            className="choose-resume-left-imgs"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                className="choose-temp-feature-img"
                                                src="/template_previews/cost-effective1.png"
                                                alt="cost-effective"
                                            />
                                            <span className="choose-template-feature-text">
                                                {/* <TbDiscountCheckFilled /> */}
                                                It's free
                                            </span>
                                            {/* <h6>Cost Effecive</h6> */}
                                            <img
                                                className="choose-temp-feature-img"
                                                src="/template_previews/easy-to-use4.PNG"
                                                alt="easy-to-use"
                                            />
                                            <span className="choose-template-feature-text">
                                                {/* <TbDiscountCheckFilled /> */}
                                                Friendly
                                            </span>
                                            {/* <h6>Easy-to-use</h6> */}
                                            <img
                                                className="choose-temp-feature-img"
                                                src="https://toppng.com/uploads/preview/user-friendly-icon-user-friendly-icon-11563212706mpwymvuyej.png"
                                                alt="easy-to-use"
                                            />
                                            <span className="choose-template-feature-text">
                                                {/* <TbDiscountCheckFilled /> */}
                                                Easily readable
                                            </span>
                                        </div>
                                    </div>

                                    <div className="choose-resume-img">
                                        <img
                                            src="/template_previews/choosetemplate.png"
                                            height={300}
                                            width={400}
                                        />
                                    </div>
                                </div>
                                <div className="home_content">
                                    <Card
                                        className="choose-template-card"
                                        hoverable
                                        cover={
                                            <>
                                                <img
                                                    alt="template1"
                                                    height={400}
                                                    src="/template_previews/template_preview1.PNG"
                                                />
                                                <h5 className="template-headings-cv">
                                                    Hybrid
                                                </h5>
                                                <p
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "black",
                                                        fontStyle: "normal",
                                                        fontFamily: "Oswald",
                                                        letterSpacing: "0.1rem",
                                                    }}
                                                >
                                                    Use the hybrid format when
                                                    you need a Curriculum Vitae
                                                    (CV) that perfectly combines
                                                    your skills and professional
                                                    experiences.
                                                </p>
                                                <hr className="template-separator-hr" />
                                            </>
                                        }
                                        onClick={() =>
                                            handleCardClick("template1")
                                        }
                                    ></Card>
                                    <Card
                                        className="choose-template-card"
                                        hoverable
                                        cover={
                                            <>
                                                <img
                                                    height={400}
                                                    // width={350}
                                                    alt="template2"
                                                    src="/template_previews/template_preview2.PNG"
                                                />
                                                <h5 className="template-headings-cv">
                                                    Professional
                                                </h5>
                                                <p
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "black",
                                                        fontStyle: "normal",
                                                        fontFamily: "Oswald",
                                                        letterSpacing: "0.1rem",
                                                    }}
                                                >
                                                    A professional Curriculum
                                                    Vitae (CV) template that was
                                                    developed to increase your
                                                    chances of getting your
                                                    dream job.
                                                </p>
                                                <hr className="template-separator-hr" />
                                            </>
                                        }
                                        onClick={() =>
                                            handleCardClick("template2")
                                        }
                                    ></Card>
                                    <Card
                                        className="choose-template-card"
                                        hoverable
                                        cover={
                                            <>
                                                <img
                                                    height={400}
                                                    alt="template3"
                                                    src="/template_previews/template_preview3.PNG"
                                                />

                                                <h5 className="template-headings-cv">
                                                    Basic
                                                </h5>
                                                <p
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "black",
                                                        fontStyle: "normal",
                                                        fontFamily: "Oswald",
                                                        letterSpacing: "0.1rem",
                                                    }}
                                                >
                                                    A versatile Curriculum Vitae
                                                    (CV) layout suitable for
                                                    various industries, easily
                                                    personalized for your
                                                    specific application.
                                                </p>
                                                <hr className="template-separator-hr" />
                                            </>
                                        }
                                        onClick={() =>
                                            handleCardClick("template3")
                                        }
                                    ></Card>

                                    {/* --------------------------- */}

                                    <Card
                                        className="choose-template-card"
                                        hoverable
                                        cover={
                                            <>
                                                <img
                                                    height={400}
                                                    alt="template4"
                                                    src="/template_previews/template_preview4.PNG"
                                                />
                                                {/* <button
                                                    className="choose-temp-btn"
                                                    onClick={() =>
                                                        handleCardClick(
                                                            "template3"
                                                        )
                                                    }
                                                    style={{ display: "none" }}
                                                >
                                                    Show
                                                </button> */}

                                                <h5 className="template-headings-cv">
                                                    Executive
                                                </h5>
                                                <p
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "black",
                                                        fontStyle: "normal",
                                                        fontFamily: "Oswald",
                                                        letterSpacing: "0.1rem",
                                                    }}
                                                >
                                                    Executive Curriculum Vitae
                                                    (CV) sample used when
                                                    applying for positions that
                                                    require more than five years
                                                    of relevant work experience.
                                                </p>
                                                <hr className="template-separator-hr" />
                                            </>
                                        }
                                        onClick={() => handleComingSoonPg()}
                                    ></Card>

                                    <Card
                                        className="choose-template-card"
                                        hoverable
                                        cover={
                                            <>
                                                <img
                                                    height={400}
                                                    alt="template5"
                                                    src="/template_previews/template_preview5.PNG"
                                                />

                                                <h5 className="template-headings-cv">
                                                    Traditional
                                                </h5>
                                                <p
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "black",
                                                        fontStyle: "normal",
                                                        fontFamily: "Oswald",
                                                        letterSpacing: "0.1rem",
                                                    }}
                                                >
                                                    The traditional CV template
                                                    will allow you to finish
                                                    your job application within
                                                    minutes, focusing on the
                                                    essential sections.
                                                </p>
                                                <hr className="template-separator-hr" />
                                            </>
                                        }
                                        onClick={() => handleComingSoonPg()}
                                    ></Card>

                                    <Card
                                        className="choose-template-card"
                                        hoverable
                                        // style={{
                                        //     width: 350,
                                        //     height: 400,
                                        //     marginBottom: "132px",
                                        // }}
                                        cover={
                                            <>
                                                <img
                                                    height={400}
                                                    alt="template4"
                                                    src="/template_previews/template_preview6.PNG"
                                                />
                                                {/* <button
                                                    className="choose-temp-btn"
                                                    onClick={() =>
                                                        handleCardClick(
                                                            "template3"
                                                        )
                                                    }
                                                    style={{ display: "none" }}
                                                >
                                                    Show
                                                </button> */}

                                                <h5 className="template-headings-cv">
                                                    Modern
                                                </h5>
                                                <p
                                                    style={{
                                                        fontSize: "15px",
                                                        color: "black",
                                                        fontStyle: "normal",
                                                        fontFamily: "Oswald",
                                                        letterSpacing: "0.1rem",
                                                    }}
                                                >
                                                    Emphasize achievements and
                                                    impact from previous roles,
                                                    showcasing your journey
                                                    through previous companies
                                                </p>
                                                <hr className="template-separator-hr" />
                                            </>
                                        }
                                        onClick={() => handleComingSoonPg()}
                                    ></Card>
                                </div>
                            </>
                        </>
                    </Content>
                    <div className="skip-temp-selection-btn">
                        <button
                            // style={{
                            //     marginLeft: "50%",
                            //     marginRight: "50%",
                            //     width: "11%",
                            // }}
                            className="save-btn"
                            onClick={() => handleCardClick("template1")}
                        >
                            SKIP TEMPLATE SELECTION
                        </button>
                        <h6>You can always change the Template later!</h6>
                    </div>
                </Layout>
            </Space>
            <div style={{ paddingTop: "20px" }}>
                <Footer />
            </div>
        </>
    );
};
export default withRouter(ChooseTemplate);
