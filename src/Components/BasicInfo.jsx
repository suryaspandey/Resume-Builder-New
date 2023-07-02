import React, { useState, useEffect } from "react";
import ProfilePhoto from "./ProfilePhoto";

import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button } from "@mui/material";

import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";

const BasicInfo = ({ themeColor, backgroundColor, textColor }) => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        phone: "",
        email: "",
        linkedin: "",
    });
    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");

    // const [themeColor, setThemeColor] = useState("#000000");

    useEffect(() => {
        const storedData = localStorage.getItem("basicInfo");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);
    useEffect(() => {
        const storedPhoto = localStorage.getItem("profilePhoto");
        if (storedPhoto) {
            setProfilePhoto(storedPhoto);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhotoSelect = (photoUrl) => {
        setProfilePhoto(photoUrl);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        let isValid = true;
        setNameError("");
        setLocationError("");
        setPhoneError("");
        setEmailError("");
        setLinkedinError("");

        if (formData.name.trim() === "") {
            setNameError("Name cannot be empty");
            isValid = false;
        }

        if (formData.phone.trim() === "") {
            setPhoneError("Phone number cannot be empty");
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            setPhoneError("Phone number should be 10 digits");
            isValid = false;
        }

        if (formData.email.trim() === "") {
            setEmailError("Email cannot be empty");
            isValid = false;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                formData.email.trim()
            )
        ) {
            setEmailError("Invalid email format");
            isValid = false;
        }

        if (formData.linkedin.trim() !== "") {
            if (
                !/^https?:\/\/(?:www\.)?linkedin\.com\/\S+$/.test(
                    formData.linkedin.trim()
                )
            ) {
                setLinkedinError("Invalid LinkedIn URL");
                isValid = false;
            }
        }

        if (isValid) {
            // Save data to local storage or perform any desired action
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            // localStorage.setItem(
            //     "experienceData",
            //     JSON.stringify(experienceData)
            // );
            // localStorage.setItem(
            //     "experienceData",
            //     JSON.stringify(experienceData)
            // );
        }
    };

    return (
        <div
            className="basic-info-container"
            style={{
                backgroundColor: backgroundColor, // Use the backgroundColor state variable
            }}
        >
            <form onSubmit={handleSubmit}>
                <div className="contact-info">
                    <div className="basic-info">
                        <input
                            className="user-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            style={{
                                textAlign: "center",
                                textTransform: "uppercase",
                            }}
                        />
                        <div className="phone-email-container">
                            <span>
                                <BsFillTelephoneFill
                                    className="phone-icon"
                                    style={{ color: themeColor }}
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                />
                            </span>

                            <span>
                                <FaEnvelope style={{ color: themeColor }} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                            </span>
                        </div>

                        <div className="linkedIn-location-container">
                            <span>
                                <FaLinkedin style={{ color: themeColor }} />
                                <input
                                    type="text"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder="LinkedIn"
                                />
                            </span>
                            <span>
                                <FaLocationArrow
                                    style={{ color: themeColor }}
                                />
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Location"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="photo-container">
                        <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
                    </div>
                </div>
                <Text>
                    <h2 className="basic-info-summary-word">Summary</h2>
                </Text>

                <div className="hr-new hr-green" />
                <textarea
                    className="summary-textarea"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="What's the one thing that makes you the best candidate for this job?"
                ></textarea>
                <div className="hr-new hr-green" />

                {/* <Button variant="contained">Save</Button> */}
                {nameError && <p>{nameError}</p>}
                {phoneError && <p>{phoneError}</p>}
                {emailError && <p>{emailError}</p>}
                {linkedinError && <p>{linkedinError}</p>}
            </form>
            <button className="save-btn" type="submit">
                Save
            </button>
        </div>
    );
};

export default BasicInfo;

//  -----PDF PREVIEW APPROACH --- didnt work

// import React, { useState, useEffect } from "react";
// import ProfilePhoto from "./ProfilePhoto";
// import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
// import { Typography } from "antd";

// const BasicInfo = ({ theme }) => {
//     const { backgroundColor, textColor } = theme;
//     const { Text } = Typography;

//     const [formData, setFormData] = useState({
//         name: "",
//         location: "",
//         phone: "",
//         email: "",
//         linkedin: "",
//     });
//     const [nameError, setNameError] = useState("");
//     const [locationError, setLocationError] = useState("");
//     const [phoneError, setPhoneError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [linkedinError, setLinkedinError] = useState("");
//     const [profilePhoto, setProfilePhoto] = useState("");

//     useEffect(() => {
//         const storedData = localStorage.getItem("basicInfo");
//         if (storedData) {
//             setFormData(JSON.parse(storedData));
//         }
//     }, []);

//     useEffect(() => {
//         const storedPhoto = localStorage.getItem("profilePhoto");
//         if (storedPhoto) {
//             setProfilePhoto(storedPhoto);
//         }
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handlePhotoSelect = (photoUrl) => {
//         setProfilePhoto(photoUrl);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate form data
//         let isValid = true;
//         setNameError("");
//         setLocationError("");
//         setPhoneError("");
//         setEmailError("");
//         setLinkedinError("");

//         if (formData.name.trim() === "") {
//             setNameError("Name cannot be empty");
//             isValid = false;
//         }

//         if (formData.phone.trim() === "") {
//             setPhoneError("Phone number cannot be empty");
//             isValid = false;
//         } else if (!/^\d{10}$/.test(formData.phone.trim())) {
//             setPhoneError("Phone number should be 10 digits");
//             isValid = false;
//         }

//         if (formData.email.trim() === "") {
//             setEmailError("Email cannot be empty");
//             isValid = false;
//         } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
//                 formData.email.trim()
//             )
//         ) {
//             setEmailError("Invalid email format");
//             isValid = false;
//         }

//         if (formData.linkedin.trim() !== "") {
//             if (
//                 !/^https?:\/\/(?:www\.)?linkedin\.com\/\S+$/.test(
//                     formData.linkedin.trim()
//                 )
//             ) {
//                 setLinkedinError("Invalid LinkedIn URL");
//                 isValid = false;
//             }
//         }

//         if (isValid) {
//             // Save data to local storage or perform any desired action
//             localStorage.setItem("basicInfo", JSON.stringify(formData));
//         }
//     };

//     return (
//         <div
//             className="basic-info-container"
//             style={{
//                 backgroundColor: backgroundColor,
//             }}
//         >
//             <form onSubmit={handleSubmit}>
//                 <div className="contact-info">
//                     <div className="basic-info">
//                         <input
//                             className="user-name"
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Name"
//                             style={{
//                                 textAlign: "center",
//                                 textTransform: "uppercase",
//                             }}
//                         />
//                         <div className="phone-email-container">
//                             <span>
//                                 <FaEnvelope style={{ color: textColor }} />
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     placeholder="Phone"
//                                 />
//                             </span>

//                             <span>
//                                 <FaLinkedin style={{ color: textColor }} />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="Email"
//                                 />
//                             </span>
//                         </div>

//                         <div className="linkedIn-location-container">
//                             <span>
//                                 <FaLinkedin style={{ color: textColor }} />
//                                 <input
//                                     type="text"
//                                     name="linkedin"
//                                     value={formData.linkedin}
//                                     onChange={handleChange}
//                                     placeholder="LinkedIn"
//                                 />
//                             </span>
//                             <span>
//                                 <FaLocationArrow style={{ color: textColor }} />
//                                 <input
//                                     type="text"
//                                     name="location"
//                                     value={formData.location}
//                                     onChange={handleChange}
//                                     placeholder="Location"
//                                 />
//                             </span>
//                         </div>
//                     </div>
//                     <div className="photo-container">
//                         <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
//                     </div>
//                 </div>
//                 <Text>
//                     <h2 className="basic-info-summary">Summary</h2>
//                 </Text>
//                 <div className="hr-new hr-green" />
//                 <textarea
//                     className="summary-textarea"
//                     name="summary"
//                     value={formData.summary}
//                     onChange={handleChange}
//                     placeholder="What's the one thing that makes you the best candidate for this job?"
//                 ></textarea>
//                 <div className="hr-new hr-green" />
//                 <Text>
//                     <button className="save-btn" type="submit">
//                         Save
//                     </button>
//                 </Text>

//                 {nameError && <p>{nameError}</p>}
//                 {phoneError && <p>{phoneError}</p>}
//                 {emailError && <p>{emailError}</p>}
//                 {linkedinError && <p>{linkedinError}</p>}
//             </form>
//         </div>
//     );
// };

// export default BasicInfo;

/// CONTEXT API -----------
