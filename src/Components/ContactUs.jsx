import React from "react";
import HeaderComp from "./HeaderComp";
import Footer from "../Components/Footer";

import "../Components/contactUs.css";
import { BorderBottom } from "@mui/icons-material";
// import { message } from "antd";

export default function ContactUs() {
    const handleContactForm = (e) => {
        e.preventDefault();
        // const { names, email, message } = e.target.value;

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {
            alert("Please fill the complete form");
        } else {
            alert("Thank you for sending us a message");
            // history.push("/");
        }
    };
    return (
        <>
            <HeaderComp />

            <div className="bg_img">
                <img
                    // src="https://cdn-blog.novoresume.com/articles/contact-information-on-resume/bg.png"
                    src="/template_previews/contact-background.PNG"
                    alt="contat_img"
                    height={400}
                />

                {/* <div className="text">
                    <b>WE ARE HERE TO HELP</b>
                </div> */}

                <div className="contact-banner-text">
                    <b className="contact-banner-text">GET IN TOUCH</b>
                </div>
            </div>
            <div className="contact-container">
                <h4 className="enquire">
                    Have an Enquiry? We’re ready to help!
                </h4>
                <h4 style={{ fontFamily: "Oswald" }}>
                    Our friendly customer service team is at your disposal.
                </h4>
                <br />
                <h4 style={{ fontFamily: "Oswald" }}>
                    Please provide us with as many details as you can, and we
                    will get back to you within two business days.
                </h4>

                <h4 className="enquire">
                    <h4>Our Timings:&nbsp;</h4>
                    <h4>
                        <b className="contact-timings">
                            {" "}
                            Monday-Sunday 9am-9pm IST
                        </b>
                    </h4>
                </h4>
            </div>

            <div className="contact">
                <div className="contact-form">
                    <form className="contactus" id="form-main">
                        <input
                            className="contact-form-input"
                            type="text"
                            name="name"
                            id="names"
                            placeholder="Enter your name"
                            style={{
                                border: "2px solid black",
                                width: "100%",
                                marginBottom: "3px",
                                // borderBottom: "2px solid grey",
                            }}
                        />

                        <input
                            className="contact-form-input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter a valid email address"
                            style={{
                                border: "2px solid black",
                                width: "100%",
                                marginBottom: "3px",
                            }}
                        />

                        <input
                            className="contact-form-input"
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                            // onResize={{ none }}
                            style={{ height: "100px", resize: "none" }}
                            maxLength={300}
                        />

                        <br />

                        {/* <input type="submit" className="submit" /> */}
                        <button
                            type="submit"
                            className="save-btn"
                            onClick={handleContactForm}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="contact-img">
                    <div className="contact-text">
                        <div className="contact-call">
                            <i className="fa-solid fa-phone"></i>
                            <h3
                                style={{
                                    fontFamily: "Oswald",
                                    padding: "10px 0",
                                }}
                            >
                                Call Us
                            </h3>

                            <h6
                                style={{
                                    fontFamily: "Oswald",
                                    padding: "10px 0",
                                }}
                            >
                                <b>+ (91) 973456789</b>
                            </h6>
                            <h6
                                style={{
                                    fontFamily: "Oswald",
                                    padding: "10px 0",
                                }}
                            >
                                <b>+ (91) 9987754321</b>
                            </h6>
                        </div>
                        <div className="contact-email">
                            <i className="fa-solid fa-envelope "></i>
                            <h3
                                style={{
                                    fontFamily: "Oswald",
                                    padding: "10px 0",
                                }}
                            >
                                Email Us
                            </h3>
                            <a
                                href="mailto:contact@myresumebuilder.com"
                                style={{ padding: "10px 0" }}
                            >
                                contact@myresumebuilder.com
                            </a>
                            <br />
                        </div>

                        <div className="contact-work">
                            <i className="fa-solid fa-briefcase"></i>
                            <h3
                                style={{
                                    fontFamily: "Oswald",
                                    padding: "10px",
                                }}
                            >
                                Thinking of working with us?
                            </h3>
                            <a
                                href="mailto:dummymyresumebuildercareers@gmail.com"
                                // style={{ fontFamily: "Oswald" }}
                            >
                                myresumebuilder.careers@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-map">
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.038985747855!2d77.63894561464518!3d12.969357190857348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bf2e556885%3A0x9a090fa07c89bbf8!2sVapour%20Pub%20and%20Brewery!5e0!3m2!1sen!2sin!4v1676711016668!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.78097131546!2d77.54702949726561!3d12.994261599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11755807bd47%3A0x9ee8589c830d754e!2s91springboard%20ITPL%20Main%20Road%2C%20Mahadevapura!5e0!3m2!1sen!2sin!4v1691499208587!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            // referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
