// import React, { useState, useEffect } from "react";
// // import ProfilePhoto from "./ProfilePhoto";
// import ProfilePhoto from "../ProfilePhoto";

// import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import "./BasicInfoTemplate1.css"; // Import the CSS file for styling
// import EducationDetails from "../EducationDetails";

// import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
// import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";

// const BasicInfoTemplate1 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         location: "",
//         phone: "",
//         email: "",
//         linkedin: "",
//         summary: "",
//     });
//     const [nameError, setNameError] = useState("");
//     const [locationError, setLocationError] = useState("");
//     const [phoneError, setPhoneError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [linkedinError, setLinkedinError] = useState("");
//     const [summaryError, setSummaryError] = useState("");

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
//         setSummaryError("");

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
//         if (formData.summary.trim() === "") {
//             setSummaryError("Summary cannot be empty");
//             isValid = false;
//         }

//         if (isValid) {
//             // Save data to local storage or perform any desired action
//             localStorage.setItem("basicInfo", JSON.stringify(formData));
//         }
//     };

//     // return (
//     //     <div className="top">
//     //         <div id="cv">
//     //             <div
//     //                 className="mainDetails"
//     //                 style={{
//     //                     backgroundColor: backgroundColor,
//     //                 }}
//     //             >
//     //                 <form onSubmit={handleSubmit}>
//     //                     <div id="headshot">
//     //                         <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
//     //                     </div>

//     //                     <div id="name">
//     //                         <h2 className="user-name">{formData.name}</h2>
//     //                         <h2 className="user-name">JOB TItle</h2>
//     //                     </div>

//     //                     <div id="contactDetails">
//     //                         <ul>
//     //                             <li>
//     //                                 <span className="info-icon">
//     //                                     <FaLocationArrow
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="text"
//     //                                     name="location"
//     //                                     value={formData.location}
//     //                                     onChange={handleChange}
//     //                                     placeholder="Location"
//     //                                 />
//     //                             </li>
//     //                             <li>
//     //                                 <span className="info-icon">
//     //                                     <BsFillTelephoneFill
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="text"
//     //                                     name="phone"
//     //                                     value={formData.phone}
//     //                                     onChange={handleChange}
//     //                                     placeholder="Phone"
//     //                                 />
//     //                             </li>
//     //                             <li>
//     //                                 <span className="info-icon">
//     //                                     <FaEnvelope
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="email"
//     //                                     name="email"
//     //                                     value={formData.email}
//     //                                     onChange={handleChange}
//     //                                     placeholder="Email"
//     //                                 />
//     //                             </li>
//     //                             <li>
//     //                                 <span className="info-icon">
//     //                                     <FaLinkedin
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="text"
//     //                                     name="linkedin"
//     //                                     value={formData.linkedin}
//     //                                     onChange={handleChange}
//     //                                     placeholder="LinkedIn"
//     //                                 />
//     //                             </li>
//     //                         </ul>
//     //                     </div>
//     //                     <div class="clear"></div>
//     //                     </div>

//     //                     <div id="mainArea">
//     //                         <section>
//     //                             <article>
//     //                             <div class="sectionTitle">
//     // 				<h1>Personal Profile</h1>
//     // 			</div>
//     //             <div class="sectionContent">
//     //                     <textarea
//     //                         className="summary-textarea"
//     //                         name="summary"
//     //                         value={formData.summary}
//     //                         onChange={handleChange}
//     //                         placeholder="What's the one thing that makes you the best candidate for this job?"
//     //                     ></textarea>
//     // 			</div>
//     //                             </article>
//     //                             <div class="clear"></div>
//     //                         </section>

//     //                     </div>

//     //                     {/* ------------ */}

//     //                     {/* <div className="contact-info">
//     //                         <div className="photo-section">
//     //                             <div className="profile-photo">
//     //                                 <ProfilePhoto
//     //                                     onPhotoSelect={handlePhotoSelect}
//     //                                 />
//     //                             </div>
//     //                             <h2 className="user-name">{formData.name}</h2>
//     //                         </div>
//     //                         <div className="info-section">
//     //                             <div className="info-item">
//     //                                 <span className="info-icon">
//     //                                     <FaLocationArrow
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="text"
//     //                                     name="location"
//     //                                     value={formData.location}
//     //                                     onChange={handleChange}
//     //                                     placeholder="Location"
//     //                                 />
//     //                             </div>
//     //                             <div className="info-item">
//     //                                 <span className="info-icon">
//     //                                     <BsFillTelephoneFill
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="text"
//     //                                     name="phone"
//     //                                     value={formData.phone}
//     //                                     onChange={handleChange}
//     //                                     placeholder="Phone"
//     //                                 />
//     //                             </div>
//     //                             <div className="info-item">
//     //                                 <span className="info-icon">
//     //                                     <FaEnvelope
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="email"
//     //                                     name="email"
//     //                                     value={formData.email}
//     //                                     onChange={handleChange}
//     //                                     placeholder="Email"
//     //                                 />
//     //                             </div>
//     //                             <div className="info-item">
//     //                                 <span className="info-icon">
//     //                                     <FaLinkedin
//     //                                         style={{ color: themeColor }}
//     //                                     />
//     //                                 </span>
//     //                                 <input
//     //                                     type="text"
//     //                                     name="linkedin"
//     //                                     value={formData.linkedin}
//     //                                     onChange={handleChange}
//     //                                     placeholder="LinkedIn"
//     //                                 />
//     //                             </div>
//     //                         </div>
//     //                     </div>
//     //                     <h2 className="basic-info-summary-word">Summary</h2>
//     //                     <div className="hr-new hr-green" />
//     //                     <textarea
//     //                         className="summary-textarea"
//     //                         name="summary"
//     //                         value={formData.summary}
//     //                         onChange={handleChange}
//     //                         placeholder="What's the one thing that makes you the best candidate for this job?"
//     //                     ></textarea> */}
//     //                     <div className="hr-new hr-green" />
//     //                     <button className="save-btn" type="submit">
//     //                         Save
//     //                     </button>
//     //                     {nameError && <p>{nameError}</p>}
//     //                     {phoneError && <p>{phoneError}</p>}
//     //                     {emailError && <p>{emailError}</p>}
//     //                     {linkedinError && <p>{linkedinError}</p>}
//     //                 </form>
//     //             </div>
//     //         </div>
//     //     </div>
//     // );

//     return (
//         <div className="top">
//             <div id="cv">
//                 <form onSubmit={handleSubmit}>
//                     <div
//                         className="mainDetails"
//                         style={{
//                             backgroundColor: backgroundColor,
//                         }}
//                     >
//                         <div id="headshot">
//                             <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
//                         </div>

//                         <div id="name">
//                             <input
//                                 className="user-name"
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Name"
//                                 style={{
//                                     textAlign: "center",
//                                     textTransform: "uppercase",
//                                 }}
//                             />
//                             <h2 className="user-name">JOB Title</h2>
//                         </div>

//                         <div id="contactDetails">
//                             <ul>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaLocationArrow
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="location"
//                                         value={formData.location}
//                                         onChange={handleChange}
//                                         placeholder="Location"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <BsFillTelephoneFill
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         placeholder="Phone"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaEnvelope
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="Email"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaLinkedin
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="linkedin"
//                                         value={formData.linkedin}
//                                         onChange={handleChange}
//                                         placeholder="LinkedIn"
//                                     />
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="clear"></div>
//                     </div>

//                     <div id="mainArea">
//                         <section>
//                             <article>
//                                 <div className="sectionTitle">
//                                     <h1>Personal Profile</h1>
//                                 </div>
//                                 <div className="sectionContent">
//                                     <textarea
//                                         className="summary-textarea"
//                                         name="summary"
//                                         value={formData.summary}
//                                         onChange={handleChange}
//                                         placeholder="What's the one thing that makes you the best candidate for this job?"
//                                     ></textarea>
//                                 </div>
//                             </article>
//                             <div className="clear"></div>
//                         </section>
//                     </div>
//                     {/* <div class="clear"></div> */}

//                     {/* <div className="hr-new hr-green" /> */}
//                     <button className="save-btn" type="submit">
//                         Save
//                     </button>
//                     {/* <br /> */}
//                     {nameError && <p>{nameError}</p>}
//                     {phoneError && <p>{phoneError}</p>}
//                     {emailError && <p>{emailError}</p>}
//                     {linkedinError && <p>{linkedinError}</p>}
//                     {summaryError && <p>{summaryError}</p>}
//                 </form>
//                 <br />
//                 <ExperienceDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//                 <br />
//                 <ProjectDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//             </div>
//         </div>
//     );
// };

// export default BasicInfoTemplate1;

//  ---------------            new updated component below, up and running  ----------

// import React, { useState, useEffect } from "react";
// import ProfilePhoto from "../ProfilePhoto";

// import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import "./BasicInfoTemplate1.css"; // Import the CSS file for styling

// import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
// import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
// import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";

// const BasicInfoTemplate1 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         location: "",
//         phone: "",
//         email: "",
//         linkedin: "",
//         summary: "",
//     });
//     const [nameError, setNameError] = useState("");
//     const [locationError, setLocationError] = useState("");
//     const [phoneError, setPhoneError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [linkedinError, setLinkedinError] = useState("");
//     const [summaryError, setSummaryError] = useState("");

//     const [profilePhoto, setProfilePhoto] = useState("");
//     const [isTyping, setIsTyping] = useState(false);

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
//         if (name === "summary") {
//             const wordCount = value.trim().split(" ").length;
//             // no of characters to 150 chars: if (value.length <= 150) {
//             if (wordCount <= 60) {
//                 setFormData((prevData) => ({
//                     ...prevData,
//                     [name]: value,
//                 }));
//                 setIsTyping(true);
//             }
//         } else {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }
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
//         setSummaryError("");

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
//         if (formData.summary.trim() === "") {
//             setSummaryError("Summary cannot be empty");
//             isValid = false;
//         }

//         if (isValid) {
//             // Save data to local storage or perform any desired action
//             localStorage.setItem("basicInfo", JSON.stringify(formData));
//         }
//     };
//     const summaryTextareaClass = isTyping
//         ? "summary-textarea active"
//         : "summary-textarea";

//     return (
//         <div className="top">
//             <div id="cv">
//                 <form onSubmit={handleSubmit}>
//                     <div
//                         className="mainDetails"
//                         style={{
//                             backgroundColor: backgroundColor,
//                         }}
//                     >
//                         <div id="headshot">
//                             <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
//                         </div>

//                         <div id="name" className="usr--name">
//                             <input
//                                 className="user-name"
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Name"
//                                 style={{
//                                     textAlign: "center",
//                                     textTransform: "uppercase",
//                                 }}
//                             />
//                         </div>

//                         <div id="contactDetails">
//                             <ul>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaLocationArrow
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="location"
//                                         value={formData.location}
//                                         onChange={handleChange}
//                                         placeholder="Location"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <BsFillTelephoneFill
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         placeholder="Phone"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaEnvelope
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="Email"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaLinkedin
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="linkedin"
//                                         value={formData.linkedin}
//                                         onChange={handleChange}
//                                         placeholder="LinkedIn"
//                                     />
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="clear"></div>
//                     </div>

//                     <div id="mainArea">
//                         <section
//                             style={{
//                                 backgroundColor: backgroundColor,
//                             }}
//                         >
//                             <article>
//                                 <div className="sectionTitle">
//                                     <h1>Personal Profile</h1>
//                                 </div>
//                                 <div className="sectionContent">
//                                     <textarea
//                                         className=" summaryTextareaClass"
//                                         name="summary"
//                                         value={formData.summary}
//                                         onChange={handleChange}
//                                         placeholder="What's the one thing that makes you the best candidate for this job?"
//                                     ></textarea>
//                                 </div>
//                             </article>
//                             <div className="clear"></div>
//                         </section>
//                     </div>

//                     <button className="save-btn" type="submit">
//                         Save
//                     </button>

//                     {nameError && <p>{nameError}</p>}
//                     {phoneError && <p>{phoneError}</p>}
//                     {emailError && <p>{emailError}</p>}
//                     {linkedinError && <p>{linkedinError}</p>}
//                     {summaryError && <p>{summaryError}</p>}
//                 </form>
//                 <br />
//                 <ExperienceDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//                 <br />
//                 <ProjectDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//                 <SkillsDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                 />
//             </div>
//         </div>
//     );
// };

// export default BasicInfoTemplate1;

//  ---------------            new updated component above, up and running  ----------

// import React, { useState, useEffect } from "react";
// import ProfilePhoto from "../ProfilePhoto";

// import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import "./BasicInfoTemplate1.css"; // Import the CSS file for styling

// import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
// import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
// import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";

// const BasicInfoTemplate1 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         location: "",
//         phone: "",
//         email: "",
//         linkedin: "",
//         summary: "",
//     });
//     const [nameError, setNameError] = useState("");
//     const [locationError, setLocationError] = useState("");
//     const [phoneError, setPhoneError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [linkedinError, setLinkedinError] = useState("");
//     const [summaryError, setSummaryError] = useState("");

//     const [profilePhoto, setProfilePhoto] = useState("");
//     const [isTyping, setIsTyping] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);

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
//         if (name === "summary") {
//             const wordCount = value.trim().split(" ").length;
//             if (wordCount <= 60) {
//                 setFormData((prevData) => ({
//                     ...prevData,
//                     [name]: value,
//                 }));
//                 setIsTyping(true);
//             }
//         } else {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }
//     };

//     const handlePhotoSelect = (photoUrl) => {
//         setProfilePhoto(photoUrl);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let isValid = true;
//         setNameError("");
//         setLocationError("");
//         setPhoneError("");
//         setEmailError("");
//         setLinkedinError("");
//         setSummaryError("");

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
//         if (formData.summary.trim() === "") {
//             setSummaryError("Summary cannot be empty");
//             isValid = false;
//         }

//         if (isValid) {
//             localStorage.setItem("basicInfo", JSON.stringify(formData));
//         }
//     };

//     const summaryTextareaClass = isTyping
//         ? "summary-textarea active"
//         : "summary-textarea";

//     const handleInputFocus = () => {
//         setIsEditing(true);
//     };

//     const handleInputBlur = () => {
//         setIsEditing(false);
//     };

//     return (
//         <div className="top">
//             <div id="cv">
//                 <form onSubmit={handleSubmit}>
//                     <div
//                         className="mainDetails"
//                         style={{
//                             backgroundColor: backgroundColor,
//                         }}
//                     >
//                         <div id="headshot">
//                             <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
//                         </div>

//                         <div id="name" className="usr--name">
//                             <input
//                                 className="user-name"
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 onFocus={handleInputFocus}
//                                 onBlur={handleInputBlur}
//                                 placeholder="Name"
//                                 style={{
//                                     textAlign: "center",
//                                     textTransform: "uppercase",
//                                 }}
//                             />
//                         </div>

//                         <div id="contactDetails">
//                             <ul>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaLocationArrow
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="location"
//                                         value={formData.location}
//                                         onChange={handleChange}
//                                         onFocus={handleInputFocus}
//                                         onBlur={handleInputBlur}
//                                         placeholder="Location"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <BsFillTelephoneFill
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         onFocus={handleInputFocus}
//                                         onBlur={handleInputBlur}
//                                         placeholder="Phone"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaEnvelope
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         onFocus={handleInputFocus}
//                                         onBlur={handleInputBlur}
//                                         placeholder="Email"
//                                     />
//                                 </li>
//                                 <li>
//                                     <span className="info-icon">
//                                         <FaLinkedin
//                                             style={{ color: themeColor }}
//                                         />
//                                     </span>
//                                     <input
//                                         type="text"
//                                         name="linkedin"
//                                         value={formData.linkedin}
//                                         onChange={handleChange}
//                                         onFocus={handleInputFocus}
//                                         onBlur={handleInputBlur}
//                                         placeholder="LinkedIn"
//                                     />
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="clear"></div>
//                     </div>

//                     <div id="mainArea">
//                         <section
//                             style={{
//                                 backgroundColor: backgroundColor,
//                             }}
//                         >
//                             <article>
//                                 <div className="sectionTitle">
//                                     <h1>Personal Profile</h1>
//                                 </div>
//                                 <div className="sectionContent">
//                                     <textarea
//                                         className={summaryTextareaClass}
//                                         name="summary"
//                                         value={formData.summary}
//                                         onChange={handleChange}
//                                         onFocus={handleInputFocus}
//                                         onBlur={handleInputBlur}
//                                         placeholder="What's the one thing that makes you the best candidate for this job?"
//                                     ></textarea>
//                                 </div>
//                             </article>
//                             <div className="clear"></div>
//                         </section>
//                     </div>

//                     {isEditing ? (
//                         <button className="save-btn" type="submit">
//                             Save
//                         </button>
//                     ) : null}

//                     {isEditing ? (
//                         <>
//                             <button className="delete-btn">Delete</button>
//                             <button className="add-btn">Add</button>
//                         </>
//                     ) : null}

//                     {nameError && <p>{nameError}</p>}
//                     {phoneError && <p>{phoneError}</p>}
//                     {emailError && <p>{emailError}</p>}
//                     {linkedinError && <p>{linkedinError}</p>}
//                     {summaryError && <p>{summaryError}</p>}
//                 </form>
//                 <br />
//                 <ExperienceDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//                 <br />
//                 <ProjectDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//                 <SkillsDetailsTemplate1
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                 />
//             </div>
//         </div>
//     );
// };

// export default BasicInfoTemplate1;

import React, { useState, useEffect } from "react";
import ProfilePhoto from "../ProfilePhoto";

import { FaEnvelope, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./BasicInfoTemplate1.css"; // Import the CSS file for styling

import ExperienceDetailsTemplate1 from "./ExperienceDetailsTemplate1";
import ProjectDetailsTemplate1 from "./ProjectDetailsTemplate1";
import SkillsDetailsTemplate1 from "./SkillsDetailsTemplate1";

const BasicInfoTemplate1 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        phone: "",
        email: "",
        linkedin: "",
        summary: "",
    });
    const [nameError, setNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [summaryError, setSummaryError] = useState("");

    const [profilePhoto, setProfilePhoto] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showButtons, setShowButtons] = useState(false); // new

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
        if (name === "summary") {
            const wordCount = value.trim().split(" ").length;
            // no of characters to 150 chars: if (value.length <= 150) {
            if (wordCount <= 60) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
                setIsTyping(true);
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
        setShowButtons(true); // new
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
        setSummaryError("");

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
        if (formData.summary.trim() === "") {
            setSummaryError("Summary cannot be empty");
            isValid = false;
        }

        if (isValid) {
            // Save data to local storage or perform any desired action
            localStorage.setItem("basicInfo", JSON.stringify(formData));
            setShowButtons(false); // new
        }
    };
    const summaryTextareaClass = isTyping
        ? "summary-textarea active"
        : "summary-textarea";

    return (
        <div className="top">
            <div id="cv">
                <form onSubmit={handleSubmit}>
                    <div
                        className="mainDetails"
                        style={{
                            backgroundColor: backgroundColor,
                        }}
                    >
                        <div id="headshot">
                            <ProfilePhoto onPhotoSelect={handlePhotoSelect} />
                        </div>

                        <div id="name" className="usr--name">
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
                        </div>

                        <div id="contactDetails">
                            <ul>
                                <li>
                                    <span className="info-icon">
                                        <FaLocationArrow
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Location"
                                    />
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <BsFillTelephoneFill
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                    />
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <FaEnvelope
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </li>
                                <li>
                                    <span className="info-icon">
                                        <FaLinkedin
                                            style={{ color: themeColor }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="LinkedIn"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div id="mainArea">
                        <section
                            style={{
                                backgroundColor: backgroundColor,
                            }}
                        >
                            <article>
                                <div className="sectionTitle">
                                    <h1>Personal Profile</h1>
                                </div>
                                <div className="sectionContent">
                                    <textarea
                                        className=" summaryTextareaClass"
                                        name="summary"
                                        value={formData.summary}
                                        onChange={handleChange}
                                        placeholder="What's the one thing that makes you the best candidate for this job?"
                                    ></textarea>
                                </div>
                            </article>
                            <div className="clear"></div>
                        </section>
                    </div>
                    {showButtons && (
                        <button className="save-btn" type="submit">
                            Save
                        </button>
                    )}

                    {nameError && <p>{nameError}</p>}
                    {phoneError && <p>{phoneError}</p>}
                    {emailError && <p>{emailError}</p>}
                    {linkedinError && <p>{linkedinError}</p>}
                    {summaryError && <p>{summaryError}</p>}
                </form>
                <br />
                <ExperienceDetailsTemplate1
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                />
                <br />
                <ProjectDetailsTemplate1
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    subheadingColor={subheadingColor}
                />
                <SkillsDetailsTemplate1
                    themeColor={themeColor}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                />
            </div>
        </div>
    );
};

export default BasicInfoTemplate1;
