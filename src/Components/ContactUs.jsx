import React from "react";
import HeaderComp from "./HeaderComp";
import Footer from "../Components/Footer";

import "../Components/contactUs.css";
import { BorderBottom } from "@mui/icons-material";

export default function ContactUs() {
    const handleContaactForm = (e) => {
        // const {name,email}
        // if(e.target.value)
        alert("Thank you for sending us a message");
        // history.push("/");
    };
    return (
        <>
            <HeaderComp />
            {/* <div>ContactUs Page Coming Soon</div> */}

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
            {/* <h6 className="enquire">Have an Enquiry? </h6> */}

            <div className="contact">
                <div className="contact-form">
                    {/* <div className="contact-form-img">
                        <img
                            src="/template_previews/owl_giffy1.gif"
                            height={200}
                        />
                    </div> */}
                    {/* <!-- <label for="form-main">Get In Touch</label> --> */}
                    <form className="contactus" id="form-main">
                        <input
                            className="contact-form-input"
                            type="text"
                            name="name"
                            id="name"
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
                            id="email"
                            placeholder="Enter a valid email address"
                            style={{
                                border: "2px solid black",
                                width: "100%",
                                marginBottom: "3px",
                            }}
                        />

                        <textarea
                            className="contact-form-input"
                            name="comment"
                            id="message"
                            placeholder="Enter your message"
                            // onResize={{ none }}
                            style={{ height: "100px", resize: "none" }}
                            maxLength={300}
                        ></textarea>

                        <br />

                        {/* <input type="submit" className="submit" /> */}
                        <button
                            type="submit"
                            className="save-btn"
                            onClick={handleContaactForm}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="contact-img">
                    <div className="contact-text">
                        <div className="contact-call">
                            <i className="fa-solid fa-phone"></i>
                            <h3> Call Us</h3>

                            <h6>+ (91) 973456789</h6>
                            <h6>+ (91) 9987754321</h6>
                        </div>
                        <div className="contact-email">
                            <i className="fa-solid fa-envelope "></i>
                            <h3>Email Us</h3>
                            <a href="mailto:abc@gmail.com">
                                contact@myresumebuilder.com
                            </a>
                            <br />
                        </div>

                        <div className="contact-work">
                            <i className="fa-solid fa-briefcase"></i>
                            <h3>Thinking of working with us?</h3>
                            <a href="mailto:dummymyresumebuildercareers@gmail.com">
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
