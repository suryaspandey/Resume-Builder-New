// import React, { useState, useEffect, useRef } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { FaCalendarAlt } from "react-icons/fa";
// import { TiLocation } from "react-icons/ti";
// import { MdWorkHistory } from "react-icons/md";
// import ProjectDetailsTemplate2 from "./ProjectDetailTemplate2";
// // import SummaryTemplate2 from "./SummaryTemplate2";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     const adjustTextareaHeight = () => {
//         const textareaRefs = document.querySelectorAll(".exper-textbox");
//         textareaRefs.forEach((textareaRef) => {
//             textareaRef.style.height = "auto";
//             textareaRef.style.height = textareaRef.scrollHeight + "px";
//         });
//     };

//     // useEffect(() => {
//     //     const storedExperiences = localStorage.getItem("experiences");
//     //     if (storedExperiences) {
//     //         setExperiences(JSON.parse(storedExperiences));
//     //     } else {
//     //         setExperiences([
//     //             {
//     //                 title: "",
//     //                 companyName: "",
//     //                 startYear: "",
//     //                 endYear: "",
//     //                 experienceType: "",
//     //                 location: "",
//     //                 description: "",
//     //                 errors: {
//     //                     title: "",
//     //                     companyName: "",
//     //                     startYear: "",
//     //                     endYear: "",
//     //                     experienceType: "",
//     //                     location: "",
//     //                     description: "",
//     //                 },
//     //             },
//     //         ]);
//     //     }
//     // }, []);

//     useEffect(() => {
//         const storedExperiences = localStorage.getItem("experiences");

//         if (storedExperiences) {
//             setExperiences(JSON.parse(storedExperiences));
//         } else {
//             setExperiences([
//                 {
//                     title: "",
//                     companyName: "",
//                     startYear: "",
//                     endYear: "",
//                     experienceType: "",
//                     location: "",
//                     description: "",
//                     errors: {
//                         title: "",
//                         companyName: "",
//                         startYear: "",
//                         endYear: "",
//                         experienceType: "",
//                         location: "",
//                         description: "",
//                     },
//                 },
//             ]);
//         }
//     }, []);

//     useEffect(() => {
//         // Adjust textarea height when the component mounts
//         adjustTextareaHeight();
//     }, [experiences]);

//     const handleAddExperience = () => {
//         const newExperience = {
//             title: "",
//             companyName: "",
//             startYear: "",
//             endYear: "",
//             experienceType: "",
//             location: "",
//             description: "",
//             errors: {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             },
//         };

//         setExperiences((prevExperiences) => [
//             ...prevExperiences,
//             newExperience,
//         ]);
//     };

//     // const handleDeleteExperience = (index) => {
//     //     setExperiences((prevExperiences) => {
//     //         const updatedExperiences = [...prevExperiences];
//     //         updatedExperiences.splice(index, 1);
//     //         return updatedExperiences;
//     //     });
//     // };

//     const handleDeleteExperience = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences.splice(index, 1);
//             return updatedExperiences;
//         });
//     };

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;

//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 [name]: value,
//                 errors: {
//                     ...updatedExperiences[index].errors,
//                     [name]: "",
//                 },
//             };
//             return updatedExperiences;
//         });
//     };

//     const handleSave = () => {
//         console.log("Experience Data ");
//         let isFormValid = true;
//         let prevEndYear = Number.MAX_VALUE;

//         const updatedExperiences = experiences.map((experience) => {
//             const {
//                 title,
//                 companyName,
//                 startYear,
//                 endYear,
//                 experienceType,
//                 location,
//                 description,
//             } = experience;
//             const errors = {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             };

//             if (title.trim() === "") {
//                 errors.title = "Please enter a title";
//                 isFormValid = false;
//             }
//             if (companyName.trim() === "") {
//                 errors.companyName = "Please enter a company name";
//                 isFormValid = false;
//             }
//             if (startYear.trim() === "") {
//                 errors.startYear = "Please enter a start year";
//                 isFormValid = false;
//             }
//             if (endYear.trim() === "") {
//                 errors.endYear = "Please enter an end year";
//                 isFormValid = false;
//             }
//             if (experienceType.trim() === "") {
//                 errors.experienceType = "Please enter an experience type";
//                 isFormValid = false;
//             }
//             if (location.trim() === "") {
//                 errors.location = "Please enter a location";
//                 isFormValid = false;
//             }
//             if (description.trim() === "") {
//                 errors.description = "Please enter a description";
//                 isFormValid = false;
//             }

//             if (startYear.trim() !== "" && endYear.trim() !== "") {
//                 const start = parseInt(startYear, 10);
//                 const end =
//                     endYear === "Present"
//                         ? new Date().getFullYear()
//                         : parseInt(endYear, 10);

//                 if (start > end) {
//                     errors.startYear =
//                         "Start year must be earlier than end year";
//                     errors.endYear = "End year must be later than start year";
//                     isFormValid = false;
//                 }

//                 // if (end > prevEndYear) {
//                 //     errors.endYear =
//                 //         "End year should be in chronological order";
//                 //     isFormValid = false;
//                 // }

//                 prevEndYear = end;
//             }

//             return { ...experience, errors };
//         });

//         setExperiences(updatedExperiences);

//         if (isFormValid) {
//             localStorage.setItem(
//                 "experiences",
//                 JSON.stringify(updatedExperiences)
//             );
//         }
//     };

//     const renderYears = () => {
//         const currentYear = new Date().getFullYear();
//         const years = [];
//         for (let year = 1980; year <= currentYear; year++) {
//             years.push(year);
//         }
//         return years;
//     };

//     const handleKeyDown = (e, index) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             handleNewLine(index);
//         } else {
//             const { name, value } = e.target;
//             const currentDescription = experiences[index].description;
//             const updatedDescription = currentDescription
//                 ? currentDescription + "\n"
//                 : "";

//             const descriptionWithBulletPoints = updatedDescription + value;
//             const wordCount = descriptionWithBulletPoints.split(/\s+/).length;

//             if (wordCount > 60) {
//                 if (e.key !== "Backspace" && e.key !== "Delete") {
//                     e.preventDefault();
//                 }
//                 return;
//             }

//             setExperiences((prevExperiences) => {
//                 const updatedExperiences = [...prevExperiences];
//                 updatedExperiences[index] = {
//                     ...updatedExperiences[index],
//                     [name]: value,
//                 };
//                 return updatedExperiences;
//             });

//             if (value === "") {
//                 handleNewBulletPoint(index);
//             }
//         }
//     };

//     const handleNewBulletPoint = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             const currentDescription = updatedExperiences[index].description;
//             const updatedDescription = currentDescription
//                 ? currentDescription + "\n• "
//                 : "• ";
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 description: updatedDescription,
//             };
//             return updatedExperiences;
//         });
//     };

//     // const handleNewLine = (index) => {

//     const handleNewLine = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             const currentDescription = updatedExperiences[index].description;
//             const lines = currentDescription.split("\n");

//             // Check if the last line has content
//             if (lines[lines.length - 1].trim().length > 0) {
//                 const updatedDescription = currentDescription + "\n• ";
//                 updatedExperiences[index] = {
//                     ...updatedExperiences[index],
//                     description: updatedDescription,
//                 };
//             }

//             return updatedExperiences;
//         });
//     };

//     return (
//         <>
//             <div
//                 className="resume_right"
//                 style={{ backgroundColor: backgroundColor }}
//             >
//                 <div class="resume_item resume_about">
//                     <div className="title">
//                         <p className="bold">PROFILE</p>
//                     </div>
//                     <p>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing
//                         elit. Perspiciatis illo fugit officiis distinctio culpa
//                         officia totam atque exercitationem inventore
//                         repudiandae?
//                     </p>
//                     {/* <SummaryTemplate2 /> */}
//                 </div>

//                 <div className="resume_item resume_work">
//                     <div class="title">
//                         <p class="bold">Work Experience</p>
//                     </div>
//                     <ul>
//                         {experiences.map((experience, index) => (
//                             <li>
//                                 <div key={index}>
//                                     <input
//                                         className="expTitle"
//                                         type="text"
//                                         name="title"
//                                         value={experience.title}
//                                         onChange={(e) => handleChange(e, index)}
//                                         placeholder="Title"
//                                     />

//                                     {experience.errors.title && (
//                                         <p>{experience.errors.title}</p>
//                                     )}

//                                     {experiences.length > 1 && (
//                                         <button
//                                             className="remove-btn"
//                                             type="button"
//                                             onClick={() =>
//                                                 handleDeleteExperience(index)
//                                             }
//                                         >
//                                             <AiFillDelete />
//                                         </button>
//                                     )}

//                                     <div className="school-clg-name-container">
//                                         <MdWorkHistory
//                                             style={{ color: themeColor }}
//                                         />
//                                         <input
//                                             className="expCompanyName"
//                                             type="text"
//                                             name="companyName"
//                                             value={experience.companyName}
//                                             onChange={(e) =>
//                                                 handleChange(e, index)
//                                             }
//                                             placeholder="Company Name"
//                                             style={{ color: subheadingColor }}
//                                         />
//                                         {experience.errors.companyName && (
//                                             <p>
//                                                 {experience.errors.companyName}
//                                             </p>
//                                         )}
//                                     </div>
//                                     <div className="dates-location-container">
//                                         <div className="dates-container">
//                                             <FaCalendarAlt
//                                                 style={{ color: themeColor }}
//                                             />

//                                             <select
//                                                 className="date-width"
//                                                 name="startYear"
//                                                 value={experience.startYear}
//                                                 onChange={(e) =>
//                                                     handleChange(e, index)
//                                                 }
//                                             >
//                                                 <option value="">
//                                                     Start Year
//                                                 </option>
//                                                 {renderYears().map((year) => (
//                                                     <option
//                                                         key={year}
//                                                         value={year}
//                                                     >
//                                                         {year}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                             {experience.errors.startYear && (
//                                                 <p>
//                                                     {
//                                                         experience.errors
//                                                             .startYear
//                                                     }
//                                                 </p>
//                                             )}
//                                             <select
//                                                 className="date-width"
//                                                 name="endYear"
//                                                 value={experience.endYear}
//                                                 onChange={(e) =>
//                                                     handleChange(e, index)
//                                                 }
//                                             >
//                                                 <option value="">
//                                                     End Year
//                                                 </option>
//                                                 {renderYears().map((year) => (
//                                                     <option
//                                                         key={year}
//                                                         value={year}
//                                                     >
//                                                         {year}
//                                                     </option>
//                                                 ))}
//                                                 <option value="Present">
//                                                     Present
//                                                 </option>
//                                             </select>
//                                             {experience.errors.endYear && (
//                                                 <p>
//                                                     {experience.errors.endYear}
//                                                 </p>
//                                             )}
//                                         </div>
//                                         <div className="location-container">
//                                             <TiLocation
//                                                 size={18}
//                                                 style={{ color: themeColor }}
//                                             />

//                                             <input
//                                                 type="text"
//                                                 name="location"
//                                                 value={experience.location}
//                                                 onChange={(e) =>
//                                                     handleChange(e, index)
//                                                 }
//                                                 placeholder="Location"
//                                                 style={{ color: textColor }}
//                                             />
//                                             {experience.errors.location && (
//                                                 <p>
//                                                     {experience.errors.location}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* description */}
//                                     {/* <div className="expDescription"> */}
//                                     <div className="info">
//                                         <textarea
//                                             name="description"
//                                             className="exper-textbox"
//                                             value={experience.description}
//                                             onChange={(e) =>
//                                                 handleChange(e, index)
//                                             }
//                                             onKeyDown={(e) =>
//                                                 handleKeyDown(e, index)
//                                             }
//                                             placeholder="Description"
//                                             rows={3}
//                                             style={{ resize: "none" }}
//                                         />

//                                         {experience.errors.description && (
//                                             <p>
//                                                 {experience.errors.description}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <button
//                     className="add-btn"
//                     type="button"
//                     onClick={handleAddExperience}
//                 >
//                     <AiOutlinePlusCircle />
//                 </button>
//                 {experiences.length > 0 && (
//                     <button
//                         className="save-btn"
//                         type="button"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                 )}
//                 <ProjectDetailsTemplate2
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

// ------------          --- rrndering code below

// import React, { useState, useEffect } from "react";
// import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
// import { MdWork, MdWorkHistory } from "react-icons/md";
// import { FaCalendarAlt } from "react-icons/fa";
// import EducationDetailsTemplate2 from "./EducationDetailsTemplate2";
// import ProjectDetailsTemplate2 from "./ProjectDetailTemplate2";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     console.log("Experience details.");

//     useEffect(() => {
//         const storedExperiences = localStorage.getItem("experiences");

//         if (storedExperiences) {
//             try {
//                 const parsedExperiences = JSON.parse(storedExperiences);
//                 console.log("Parsed experiences:", parsedExperiences);

//                 if (
//                     typeof parsedExperiences === "object" &&
//                     parsedExperiences !== null
//                 ) {
//                     const experiencesArray = Array.isArray(parsedExperiences)
//                         ? parsedExperiences
//                         : Object.values(parsedExperiences);
//                     console.log("Experiences array:", experiencesArray);

//                     setExperiences(experiencesArray);
//                     return;
//                 }
//             } catch (error) {
//                 console.error("Error parsing stored experiences:", error);
//             }
//         }

//         // Default experiences when stored experiences are not valid
//         setExperiences([
//             {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 description: "",
//                 experienceType: "",
//                 location: "",
//                 errors: {
//                     title: "",
//                     companyName: "",
//                     startYear: "",
//                     endYear: "",
//                     description: "",
//                     experienceType: "",
//                     location: "",
//                 },
//             },
//         ]);
//     }, []);

//     const handleChange = (index, e) => {
//         const { name, value } = e.target;
//         const updatedExperiences = [...experiences];
//         updatedExperiences[index] = {
//             ...updatedExperiences[index],
//             [name]: value,
//         };
//         setExperiences(updatedExperiences);
//     };

//     const handleAddExperience = () => {
//         const updatedExperiences = [
//             ...experiences,
//             {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 description: "",
//                 experienceType: "",
//                 location: "",
//                 errors: {
//                     title: "",
//                     companyName: "",
//                     startYear: "",
//                     endYear: "",
//                     description: "",
//                     experienceType: "",
//                     location: "",
//                 },
//             },
//         ];
//         setExperiences(updatedExperiences);
//     };

//     const handleRemoveExperience = (index) => {
//         const updatedExperiences = [...experiences];
//         updatedExperiences.splice(index, 1);
//         setExperiences(updatedExperiences);
//     };

//     const handleSave = () => {
//         const formattedExperiences = {};
//         experiences.forEach((experience, index) => {
//             const formattedExperience = { ...experience };
//             delete formattedExperience.errors;
//             formattedExperiences[index] = formattedExperience;
//         });
//         localStorage.setItem(
//             "experiences",
//             JSON.stringify(formattedExperiences)
//         );
//     };

//     return (
//         <div>
//             <div className="section-heading">
//                 <MdWork size={28} style={{ marginRight: "5px" }} />
//                 <h3 style={{ color: subheadingColor }}>Experience</h3>
//             </div>
//             <div>
//                 {experiences.map((experience, index) => (
//                     <div key={index}>
//                         <div className="input-group">
//                             <input
//                                 type="text"
//                                 name="title"
//                                 placeholder="Job Title"
//                                 value={experience.title}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             <input
//                                 type="text"
//                                 name="companyName"
//                                 placeholder="Company Name"
//                                 value={experience.companyName}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             <input
//                                 type="text"
//                                 name="startYear"
//                                 placeholder="Start Year"
//                                 value={experience.startYear}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             <input
//                                 type="text"
//                                 name="endYear"
//                                 placeholder="End Year"
//                                 value={experience.endYear}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             <textarea
//                                 name="description"
//                                 placeholder="Description"
//                                 value={experience.description}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             {/* Additional input fields */}
//                             <input
//                                 type="text"
//                                 name="experienceType"
//                                 placeholder="Experience Type"
//                                 value={experience.experienceType}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             <input
//                                 type="text"
//                                 name="location"
//                                 placeholder="Location"
//                                 value={experience.location}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             {/* End of additional input fields */}
//                             {index === experiences.length - 1 && (
//                                 <div className="add-remove-button">
//                                     <AiOutlinePlusCircle
//                                         size={24}
//                                         color={themeColor}
//                                         onClick={handleAddExperience}
//                                     />
//                                 </div>
//                             )}
//                             {experiences.length > 1 && (
//                                 <div className="add-remove-button">
//                                     <AiFillDelete
//                                         size={24}
//                                         color={themeColor}
//                                         onClick={() =>
//                                             handleRemoveExperience(index)
//                                         }
//                                     />
//                                 </div>
//                             )}
//                         </div>
//                         <div className="error-message">
//                             {/* Display error messages if present */}
//                             {Object.values(experience.errors || {}).map(
//                                 (error, i) => (
//                                     <p key={i} style={{ color: "red" }}>
//                                         {error}
//                                     </p>
//                                 )
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="button-group">
//                 <button
//                     className="save-button"
//                     style={{ background: themeColor, color: textColor }}
//                     onClick={handleSave}
//                 >
//                     Save
//                 </button>
//                 <button
//                     className="cancel-button"
//                     style={{ background: backgroundColor, color: textColor }}
//                 >
//                     Cancel
//                 </button>
//             </div>
//             <ProjectDetailsTemplate2
//                 themeColor={themeColor}
//                 backgroundColor={backgroundColor}
//                 textColor={textColor}
//                 subheadingColor={subheadingColor}
//             />
//         </div>
//     );
// };

// export default ExperienceDetailsTemplate2;

// checking this code for errors

// import React, { useState, useEffect, useRef } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { FaCalendarAlt } from "react-icons/fa";
// import { TiLocation } from "react-icons/ti";
// import { MdWorkHistory } from "react-icons/md";
// import ProjectDetailsTemplate2 from "./ProjectDetailTemplate2";
// // import SummaryTemplate2 from "./SummaryTemplate2";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([
//         {
//             title: "",
//             companyName: "",
//             startYear: "",
//             endYear: "",
//             experienceType: "",
//             location: "",
//             description: "",
//             errors: {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             },
//         },
//     ]);

//     const adjustTextareaHeight = () => {
//         const textareaRefs = document.querySelectorAll(".exper-textbox");
//         textareaRefs.forEach((textareaRef) => {
//             textareaRef.style.height = "auto";
//             textareaRef.style.height = textareaRef.scrollHeight + "px";
//         });
//     };

//     // useEffect(() => {
//     //     const storedExperiences = localStorage.getItem("experiences");
//     //     if (storedExperiences) {
//     //         try {
//     //             setExperiences(JSON.parse(storedExperiences));
//     //         } catch (error) {
//     //             console.error("Error parsing stored experiences:", error);
//     //             setExperiences([]);
//     //         }
//     //     } else {
//     //         setExperiences([]);
//     //     }
//     // }, []);
//     useEffect(() => {
//         const storedExperiences = localStorage.getItem("experienceData");
//         if (storedExperiences) {
//             try {
//                 setExperiences(JSON.parse(storedExperiences));
//             } catch (error) {
//                 console.error("Error parsing stored experiences:", error);
//                 setExperiences([]);
//             }
//         } else {
//             setExperiences([]); // Initialize experiences as an empty array
//         }
//     }, []);

//     useEffect(() => {
//         // Adjust textarea height when the component mounts
//         adjustTextareaHeight();
//     }, [experiences]);

//     const handleAddExperience = () => {
//         const newExperience = {
//             title: "",
//             companyName: "",
//             startYear: "",
//             endYear: "",
//             experienceType: "",
//             location: "",
//             description: "",
//             errors: {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             },
//         };

//         setExperiences((prevExperiences) => [
//             ...prevExperiences,
//             newExperience,
//         ]);
//     };

//     const handleDeleteExperience = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences.splice(index, 1);
//             return updatedExperiences;
//         });
//     };

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;

//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 [name]: value,
//                 errors: {
//                     ...updatedExperiences[index].errors,
//                     [name]: "",
//                 },
//             };
//             return updatedExperiences;
//         });
//     };

//     const handleSave = () => {
//         let isFormValid = true;
//         let prevEndYear = Number.MAX_VALUE;

//         const updatedExperiences = experiences.map((experience) => {
//             const {
//                 title,
//                 companyName,
//                 startYear,
//                 endYear,
//                 experienceType,
//                 location,
//                 description,
//             } = experience;
//             const errors = {
//                 title: "",
//                 companyName: "",
//                 startYear: "",
//                 endYear: "",
//                 experienceType: "",
//                 location: "",
//                 description: "",
//             };

//             if (title.trim() === "") {
//                 errors.title = "Please enter a title";
//                 isFormValid = false;
//             }
//             if (companyName.trim() === "") {
//                 errors.companyName = "Please enter a company name";
//                 isFormValid = false;
//             }
//             if (startYear.trim() === "") {
//                 errors.startYear = "Please enter a start year";
//                 isFormValid = false;
//             }
//             if (endYear.trim() === "") {
//                 errors.endYear = "Please enter an end year";
//                 isFormValid = false;
//             }
//             if (experienceType.trim() === "") {
//                 errors.experienceType = "Please enter an experience type";
//                 isFormValid = false;
//             }
//             if (location.trim() === "") {
//                 errors.location = "Please enter a location";
//                 isFormValid = false;
//             }
//             if (description.trim() === "") {
//                 errors.description = "Please enter a description";
//                 isFormValid = false;
//             }

//             if (startYear.trim() !== "" && endYear.trim() !== "") {
//                 const start = parseInt(startYear, 10);
//                 const end =
//                     endYear === "Present"
//                         ? new Date().getFullYear()
//                         : parseInt(endYear, 10);

//                 if (start > end) {
//                     errors.startYear =
//                         "Start year must be earlier than end year";
//                     errors.endYear = "End year must be later than start year";
//                     isFormValid = false;
//                 }

//                 // if (end > prevEndYear) {
//                 //     errors.endYear =
//                 //         "End year should be in chronological order";
//                 //     isFormValid = false;
//                 // }

//                 prevEndYear = end;
//             }

//             return { ...experience, errors };
//         });

//         setExperiences(updatedExperiences);

//         if (isFormValid) {
//             localStorage.setItem(
//                 "experienceData",
//                 JSON.stringify(updatedExperiences)
//             );
//         }
//     };

//     const renderYears = () => {
//         const currentYear = new Date().getFullYear();
//         const years = [];
//         for (let year = 1980; year <= currentYear; year++) {
//             years.push(year);
//         }
//         return years;
//     };

//     const handleKeyDown = (e, index) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             handleNewLine(index);
//         } else {
//             const { name, value } = e.target;
//             const currentDescription = experiences[index].description;
//             const updatedDescription = currentDescription
//                 ? currentDescription + "\n"
//                 : "";

//             const descriptionWithBulletPoints = updatedDescription + value;
//             const wordCount = descriptionWithBulletPoints.split(/\s+/).length;

//             if (wordCount > 100) {
//                 if (e.key !== "Backspace" && e.key !== "Delete") {
//                     e.preventDefault();
//                 }
//                 return;
//             }

//             setExperiences((prevExperiences) => {
//                 const updatedExperiences = [...prevExperiences];
//                 updatedExperiences[index] = {
//                     ...updatedExperiences[index],
//                     [name]: value,
//                 };
//                 return updatedExperiences;
//             });

//             if (value === "") {
//                 handleNewBulletPoint(index);
//             }
//         }
//     };

//     const handleNewBulletPoint = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             const currentDescription = updatedExperiences[index].description;
//             const updatedDescription = currentDescription
//                 ? currentDescription + "\n• "
//                 : "• ";
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 description: updatedDescription,
//             };
//             return updatedExperiences;
//         });
//     };

//     // const handleNewLine = (index) => {

//     const handleNewLine = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             const currentDescription = updatedExperiences[index].description;
//             const lines = currentDescription.split("\n");

//             // Check if the last line has content
//             if (lines[lines.length - 1].trim().length > 0) {
//                 const updatedDescription = currentDescription + "\n• ";
//                 updatedExperiences[index] = {
//                     ...updatedExperiences[index],
//                     description: updatedDescription,
//                 };
//             }

//             return updatedExperiences;
//         });
//     };

//     return (
//         <>
//             <div
//                 className="resume_right"
//                 style={{ backgroundColor: backgroundColor }}
//             >
//                 <div className="resume_item resume_about">
//                     <div className="title">
//                         <p className="bold">Summary</p>
//                     </div>
//                     <p>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing
//                         elit. Perspiciatis illo fugit officiis distinctio culpa
//                         officia totam atque exercitationem inventore
//                         repudiandae?
//                     </p>
//                     {/* <SummaryTemplate2 /> */}
//                 </div>

//                 <div className="resume_item resume_work">
//                     <div className="title">
//                         <p className="bold">Work Experience</p>
//                     </div>
//                     <ul>
//                         {experiences.map((experience, index) => (
//                             <li>
//                                 <div key={index}>
//                                     <input
//                                         className="expTitle"
//                                         type="text"
//                                         name="title"
//                                         value={experience?.title}
//                                         onChange={(e) => handleChange(e, index)}
//                                         placeholder="Title"
//                                     />

//                                     {experience.errors.title && (
//                                         <p>{experience.errors.title}</p>
//                                     )}

//                                     {experiences.length > 1 && (
//                                         <button
//                                             className="remove-btn"
//                                             type="button"
//                                             onClick={() =>
//                                                 handleDeleteExperience(index)
//                                             }
//                                         >
//                                             <AiFillDelete />
//                                         </button>
//                                     )}

//                                     <div className="school-clg-name-container">
//                                         <MdWorkHistory
//                                             style={{ color: themeColor }}
//                                         />
//                                         <input
//                                             className="expCompanyName"
//                                             type="text"
//                                             name="companyName"
//                                             value={experience?.companyName}
//                                             onChange={(e) =>
//                                                 handleChange(e, index)
//                                             }
//                                             placeholder="Company Name"
//                                             style={{ color: subheadingColor }}
//                                         />
//                                         {experience.errors.companyName && (
//                                             <p>
//                                                 {experience.errors.companyName}
//                                             </p>
//                                         )}
//                                     </div>
//                                     <div className="dates-location-container">
//                                         <div className="dates-container">
//                                             <FaCalendarAlt
//                                                 style={{ color: themeColor }}
//                                             />

//                                             <select
//                                                 className="date-width"
//                                                 name="startYear"
//                                                 value={experience?.startYear}
//                                                 onChange={(e) =>
//                                                     handleChange(e, index)
//                                                 }
//                                             >
//                                                 <option value="">
//                                                     Start Year
//                                                 </option>
//                                                 {renderYears().map((year) => (
//                                                     <option
//                                                         key={year}
//                                                         value={year}
//                                                     >
//                                                         {year}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                             {experience.errors.startYear && (
//                                                 <p>
//                                                     {
//                                                         experience.errors
//                                                             .startYear
//                                                     }
//                                                 </p>
//                                             )}
//                                             <select
//                                                 className="date-width"
//                                                 name="endYear"
//                                                 value={experience?.endYear}
//                                                 onChange={(e) =>
//                                                     handleChange(e, index)
//                                                 }
//                                             >
//                                                 <option value="">
//                                                     End Year
//                                                 </option>
//                                                 {renderYears().map((year) => (
//                                                     <option
//                                                         key={year}
//                                                         value={year}
//                                                     >
//                                                         {year}
//                                                     </option>
//                                                 ))}
//                                                 <option value="Present">
//                                                     Present
//                                                 </option>
//                                             </select>
//                                             {experience.errors.endYear && (
//                                                 <p>
//                                                     {experience.errors.endYear}
//                                                 </p>
//                                             )}
//                                         </div>
//                                         <div className="location-container">
//                                             <TiLocation
//                                                 size={18}
//                                                 style={{ color: themeColor }}
//                                             />

//                                             <input
//                                                 type="text"
//                                                 name="location"
//                                                 value={experience?.location}
//                                                 onChange={(e) =>
//                                                     handleChange(e, index)
//                                                 }
//                                                 placeholder="Location"
//                                                 style={{ color: textColor }}
//                                             />
//                                             {experience.errors.location && (
//                                                 <p>
//                                                     {experience.errors.location}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>
//                                     {/* <select
//                                         className="exp-select-width"
//                                         name="experienceType"
//                                         value={experience.experienceType}
//                                         onChange={(e) => handleChange(e, index)}
//                                     >
//                                         <option value="">
//                                             Experience Type
//                                         </option>
//                                         <option value="Part-time">
//                                             Part-time
//                                         </option>
//                                         <option value="Full-time">
//                                             Full-time
//                                         </option>
//                                     </select>
//                                     {experience.errors.experienceType && (
//                                         <p>
//                                             {experience.errors.experienceType}
//                                         </p>
//                                     )} */}
//                                     {/* description */}
//                                     {/* <div className="expDescription"> */}
//                                     <div className="info">
//                                         <textarea
//                                             name="description"
//                                             className="exper-textbox"
//                                             value={experience?.description}
//                                             onChange={(e) =>
//                                                 handleChange(e, index)
//                                             }
//                                             onKeyDown={(e) =>
//                                                 handleKeyDown(e, index)
//                                             }
//                                             placeholder="Description"
//                                             rows={3}
//                                             style={{ resize: "none" }}
//                                         />

//                                         {experience.errors.description && (
//                                             <p>
//                                                 {experience.errors.description}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <button
//                     className="add-btn"
//                     type="button"
//                     onClick={handleAddExperience}
//                 >
//                     <AiOutlinePlusCircle />
//                 </button>
//                 {experiences.length > 0 && (
//                     <button
//                         className="save-btn"
//                         type="button"
//                         onClick={handleSave}
//                     >
//                         Save
//                     </button>
//                 )}
//                 <ProjectDetailsTemplate2
//                     themeColor={themeColor}
//                     backgroundColor={backgroundColor}
//                     textColor={textColor}
//                     subheadingColor={subheadingColor}
//                 />
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

// import React, { useState, useEffect } from "react";
// import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
// import { MdWork } from "react-icons/md";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         const storedExperiences = localStorage.getItem("experiences");
//         if (storedExperiences) {
//             setExperiences(JSON.parse(storedExperiences));
//         } else {
//             setExperiences([
//                 {
//                     jobTitle: "",
//                     companyName: "",
//                     startDate: "",
//                     endDate: "",
//                     jobDescription: "",
//                     errors: {
//                         jobTitle: "",
//                         companyName: "",
//                         startDate: "",
//                         endDate: "",
//                         jobDescription: "",
//                     },
//                 },
//             ]);
//         }
//     }, []);

//     const handleAddExperience = () => {
//         const newExperience = {
//             jobTitle: "",
//             companyName: "",
//             startDate: "",
//             endDate: "",
//             jobDescription: "",
//             errors: {
//                 jobTitle: "",
//                 companyName: "",
//                 startDate: "",
//                 endDate: "",
//                 jobDescription: "",
//             },
//         };

//         setExperiences((prevExperiences) => [
//             ...prevExperiences,
//             newExperience,
//         ]);
//     };

//     const handleDeleteExperience = (index) => {
//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences.splice(index, 1);
//             return updatedExperiences;
//         });
//     };

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;

//         setExperiences((prevExperiences) => {
//             const updatedExperiences = [...prevExperiences];
//             updatedExperiences[index] = {
//                 ...updatedExperiences[index],
//                 [name]: value,
//                 errors: {
//                     ...updatedExperiences[index].errors,
//                     [name]: "",
//                 },
//             };
//             return updatedExperiences;
//         });
//     };

//     const handleSave = () => {
//         let isFormValid = true;

//         const updatedExperiences = experiences.map((experience) => {
//             const {
//                 jobTitle,
//                 companyName,
//                 startDate,
//                 endDate,
//                 jobDescription,
//             } = experience;
//             const errors = {
//                 jobTitle: "",
//                 companyName: "",
//                 startDate: "",
//                 endDate: "",
//                 jobDescription: "",
//             };

//             if (jobTitle.trim() === "") {
//                 errors.jobTitle = "Please enter a job title";
//                 isFormValid = false;
//             }

//             if (companyName.trim() === "") {
//                 errors.companyName = "Please enter a company name";
//                 isFormValid = false;
//             }

//             if (startDate.trim() === "") {
//                 errors.startDate = "Please enter a start date";
//                 isFormValid = false;
//             }

//             if (endDate.trim() === "") {
//                 errors.endDate = "Please enter an end date";
//                 isFormValid = false;
//             }

//             if (jobDescription.trim() === "") {
//                 errors.jobDescription = "Please enter a job description";
//                 isFormValid = false;
//             }

//             return { ...experience, errors };
//         });

//         setExperiences(updatedExperiences);

//         if (isFormValid) {
//             localStorage.setItem(
//                 "experiences",
//                 JSON.stringify(updatedExperiences)
//             );
//         }
//     };

//     return (
//         <>
//             <div
//                 className="resume_item resume_work"
//                 style={{
//                     backgroundColor: backgroundColor, // Use the backgroundColor state variable
//                 }}
//             >
//                 <div className="title">
//                     <p className="bold">EXPERIENCE</p>
//                 </div>
//                 <ul>
//                     {Array.isArray(experiences) &&
//                         experiences.map((experience, index) => (
//                             <li key={index}>
//                                 <div>
//                                     <input
//                                         className="expTitle"
//                                         type="text"
//                                         name="jobTitle"
//                                         placeholder="Job Title"
//                                         value={experience.jobTitle}
//                                         onChange={(e) => handleChange(e, index)}
//                                     />
//                                     {experience.errors.jobTitle && (
//                                         <p>{experience.errors.jobTitle}</p>
//                                     )}

//                                     <button
//                                         className="remove-btn"
//                                         onClick={() =>
//                                             handleDeleteExperience(index)
//                                         }
//                                     >
//                                         <AiFillDelete />
//                                     </button>

//                                     <div className="school-clg-name-container">
//                                         <MdWork style={{ color: themeColor }} />
//                                         <input
//                                             type="text"
//                                             name="companyName"
//                                             placeholder="Company Name"
//                                             value={experience.companyName}
//                                             onChange={(e) =>
//                                                 handleChange(e, index)
//                                             }
//                                         />
//                                         {experience.errors.companyName && (
//                                             <p>
//                                                 {experience.errors.companyName}
//                                             </p>
//                                         )}
//                                     </div>
//                                     <div className="project-description">
//                                         <textarea
//                                             name="jobDescription"
//                                             placeholder="Job Description"
//                                             value={experience.jobDescription}
//                                             onChange={(e) =>
//                                                 handleChange(e, index)
//                                             }
//                                         ></textarea>
//                                         {experience.errors.jobDescription && (
//                                             <p>
//                                                 {
//                                                     experience.errors
//                                                         .jobDescription
//                                                 }
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}
//                 </ul>
//             </div>
//             <div className="add-button-container">
//                 <button className="add-btn" onClick={handleAddExperience}>
//                     <AiOutlinePlusCircle />
//                 </button>
//             </div>
//             <div className="save-button-container">
//                 <button className="save-btn" onClick={handleSave}>
//                     Save
//                 </button>
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

//  ----------- ----------- working code below

// import React, { useState } from "react";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     const addExperience = () => {
//         const prevExperiences = Array.isArray(experiences) ? experiences : [];

//         const newExperience = {
//             // Initialize the properties of the new experience object
//             // For example:
//             company: "",
//             position: "",
//             startDate: "",
//             endDate: "",
//             description: "",
//         };

//         const updatedExperiences = [...prevExperiences, newExperience];
//         setExperiences(updatedExperiences);
//     };

//     const handleExperienceChange = (index, property, value) => {
//         const updatedExperiences = [...experiences];
//         updatedExperiences[index][property] = value;
//         setExperiences(updatedExperiences);
//     };

//     const removeExperience = (index) => {
//         const updatedExperiences = [...experiences];
//         updatedExperiences.splice(index, 1);
//         setExperiences(updatedExperiences);
//     };

//     return (
//         <>
//             <div className="experience">
//                 <h2 className="experience_heading">Experience</h2>
//                 <div className="experience_content">
//                     {experiences.map((experience, index) => (
//                         <div key={index} className="experience_item">
//                             <input
//                                 type="text"
//                                 placeholder="Company"
//                                 value={experience.company}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "company",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Position"
//                                 value={experience.position}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "position",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Start Date"
//                                 value={experience.startDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "startDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="End Date"
//                                 value={experience.endDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "endDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             <textarea
//                                 placeholder="Description"
//                                 value={experience.description}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "description",
//                                         e.target.value
//                                     )
//                                 }
//                             ></textarea>
//                             <button
//                                 className="remove-experience"
//                                 onClick={() => removeExperience(index)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 <button className="add-experience" onClick={addExperience}>
//                     <i className="fas fa-plus-circle"></i> Add
//                 </button>
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

//  ------------- working code above -----------------

// import React, { useState, useEffect } from "react";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [position, setPosition] = useState("");
//     const [company, setCompany] = useState("");
//     const [description, setDescription] = useState("");
//     const [experienceError, setExperienceError] = useState("");
//     const [positionError, setPositionError] = useState("");
//     const [companyError, setCompanyError] = useState("");
//     const [descriptionError, setDescriptionError] = useState("");

//     useEffect(() => {
//         const storedData = localStorage.getItem("experiences");
//         if (storedData) {
//             const parsedData = JSON.parse(storedData);
//             if (Array.isArray(parsedData)) {
//                 setExperiences(parsedData);
//             } else {
//                 setExperiences([]);
//             }
//         } else {
//             setExperiences([]);
//         }
//     }, []);

//     const addExperience = () => {
//         const prevExperiences = Array.isArray(experiences) ? experiences : [];

//         const newExperience = {
//             company: "",
//             position: "",
//             startDate: "",
//             endDate: "",
//             description: "",
//         };

//         const updatedExperiences = [...prevExperiences, newExperience];
//         setExperiences(updatedExperiences);
//     };

//     // const handleExperienceChange = (index, property, value) => {
//     //     const updatedExperiences = [...experiences];
//     //     updatedExperiences[index][property] = value;
//     //     setExperiences(updatedExperiences);
//     // };
//     const handleExperienceChange = (index, property, value) => {
//         const updatedExperiences = [...experiences];
//         updatedExperiences[index] = {
//             ...updatedExperiences[index],
//             [property]: value,
//         };
//         setExperiences(updatedExperiences);
//     };

//     const removeExperience = (index) => {
//         const updatedExperiences = [...experiences];
//         updatedExperiences.splice(index, 1);
//         setExperiences(updatedExperiences);
//     };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     let isValid = true;
//     //     // Perform validations
//     //     for (const experience of experiences) {
//     //         if (
//     //             experience.company.trim() === "" ||
//     //             experience.position.trim() === "" ||
//     //             experience.startDate.trim() === "" ||
//     //             experience.endDate.trim() === "" ||
//     //             experience.startDate > experience.endDate
//     //         ) {
//     //             isValid = false;
//     //             break;
//     //         }
//     //     }

//     //     if (isValid) {
//     //         // Save data to local storage
//     //         localStorage.setItem("experiences", JSON.stringify(experiences));
//     //     }
//     // };
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate form data
//         let isValid = true;
//         setExperienceError("");
//         setPositionError("");
//         setCompanyError("");
//         setDescriptionError("");

//         if (startDate.trim() === "") {
//             setExperienceError("Start year cannot be empty");
//             isValid = false;
//         }

//         if (endDate.trim() === "") {
//             setExperienceError("End year cannot be empty");
//             isValid = false;
//         }

//         if (position.trim() === "") {
//             setPositionError("Position cannot be empty");
//             isValid = false;
//         }

//         if (company.trim() === "") {
//             setCompanyError("Company cannot be empty");
//             isValid = false;
//         }

//         if (description.trim() === "") {
//             setDescriptionError("Description cannot be empty");
//             isValid = false;
//         }

//         if (isValid) {
//             // Save data to local storage
//             const newExperience = {
//                 startDate,
//                 endDate,
//                 position,
//                 company,
//                 description,
//             };

//             const updatedExperiences = [...experiences, newExperience];
//             localStorage.setItem(
//                 "experiences",
//                 JSON.stringify(updatedExperiences)
//             );

//             // Update the state
//             setExperiences(updatedExperiences);

//             // Reset form fields
//             setStartDate("");
//             setEndDate("");
//             setPosition("");
//             setCompany("");
//             setDescription("");
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setExperiences((prevExperiences) =>
//             prevExperiences.map((experience, index) => {
//                 if (index === experiences.length - 1) {
//                     return { ...experience, [name]: value };
//                 }
//                 return experience;
//             })
//         );
//     };

//     const getYearOptions = (experience) => {
//         const currentYear = new Date().getFullYear();
//         const years = [];
//         for (let i = currentYear; i >= currentYear - 50; i--) {
//             years.push(i);
//         }
//         return years.map((year) => (
//             <option key={year} value={year}>
//                 {year}
//             </option>
//         ));
//     };

//     return (
//         <>
//             <div className="experience">
//                 <h2 className="experience_heading">Experience</h2>
//                 <div className="experience_content">
//                     {experiences.map((experience, index) => (
//                         <div key={index} className="experience_item">
//                             <input
//                                 type="text"
//                                 placeholder="Company"
//                                 value={experience.company}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "company",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.error && <p>{companyError}</p>}
//                             <input
//                                 type="text"
//                                 placeholder="Position"
//                                 value={experience.position}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "position",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {positionError && <p>{positionError}</p>}

//                             {/* <input
//                                 type="text"
//                                 placeholder="Start Date"
//                                 value={experience.startDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "startDate",
//                                         e.target.value
//                                     )
//                                 }
//                             /> */}
//                             <select
//                                 name="startYear"
//                                 value={experience.startYear}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "startYear",
//                                         e.target.value
//                                     )
//                                 }
//                             >
//                                 <option value="">Start Year</option>
//                                 {getYearOptions(experience)}
//                             </select>

//                             <input
//                                 type="text"
//                                 placeholder="End Date"
//                                 value={experience.endDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "endDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             <textarea
//                                 placeholder="Description"
//                                 value={experience.description}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "description",
//                                         e.target.value
//                                     )
//                                 }
//                             ></textarea>
//                             {descriptionError && <p>{descriptionError}</p>}
//                             <button
//                                 className="remove-experience"
//                                 onClick={() => removeExperience(index)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="experience_buttons">
//                     <button className="add-btn" onClick={addExperience}>
//                         Add Experience
//                     </button>
//                     <button className="save-btn" onClick={handleSubmit}>
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

// updated working code below

// import React, { useState, useEffect } from "react";

// const ExperienceDetailsTemplate2 = ({
//     themeColor,
//     backgroundColor,
//     textColor,
//     subheadingColor,
// }) => {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         const storedData = localStorage.getItem("experiences");
//         if (storedData) {
//             const parsedData = JSON.parse(storedData);
//             if (Array.isArray(parsedData)) {
//                 setExperiences(parsedData);
//             } else {
//                 setExperiences([]);
//             }
//         } else {
//             setExperiences([]);
//         }
//     }, []);

//     const addExperience = () => {
//         setExperiences((prevExperiences) => [
//             ...prevExperiences,
//             {
//                 company: "",
//                 position: "",
//                 startDate: "",
//                 endDate: "",
//                 description: "",
//                 errors: {},
//             },
//         ]);
//     };

//     const handleExperienceChange = (index, property, value) => {
//         setExperiences((prevExperiences) =>
//             prevExperiences.map((experience, experienceIndex) => {
//                 if (experienceIndex === index) {
//                     return { ...experience, [property]: value };
//                 }
//                 return experience;
//             })
//         );
//     };

//     const removeExperience = (index) => {
//         setExperiences((prevExperiences) =>
//             prevExperiences.filter(
//                 (experience, experienceIndex) => experienceIndex !== index
//             )
//         );
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let isValid = true;

//         const updatedExperiences = experiences.map((experience) => {
//             const { company, position, startDate, endDate, description } =
//                 experience;

//             // Perform validations
//             const errors = {};

//             if (company.trim() === "") {
//                 errors.company = "Company cannot be empty";
//                 isValid = false;
//             }

//             if (position.trim() === "") {
//                 errors.position = "Position cannot be empty";
//                 isValid = false;
//             }

//             if (startDate.trim() === "") {
//                 errors.startDate = "Start Date cannot be empty";
//                 isValid = false;
//             }

//             if (endDate.trim() === "") {
//                 errors.endDate = "End Date cannot be empty";
//                 isValid = false;
//             }

//             if (description.trim() === "") {
//                 errors.description = "Description cannot be empty";
//                 isValid = false;
//             }

//             return { ...experience, errors };
//         });

//         if (isValid) {
//             // Save data to local storage
//             localStorage.setItem(
//                 "experiences",
//                 JSON.stringify(updatedExperiences)
//             );

//             // Update the state
//             setExperiences(updatedExperiences);
//         } else {
//             // Update the state with the error messages
//             setExperiences(updatedExperiences);
//         }
//     };

//     return (
//         <>
//             <div className="experience">
//                 <h2 className="experience_heading">Experience</h2>
//                 <div className="experience_content">
//                     {experiences.map((experience, index) => (
//                         <div key={index} className="experience_item">
//                             <input
//                                 type="text"
//                                 placeholder="Company"
//                                 value={experience.company}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "company",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors && experience.errors.company && (
//                                 <p>{experience.errors.company}</p>
//                             )}
//                             <input
//                                 type="text"
//                                 placeholder="Position"
//                                 value={experience.position}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "position",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors &&
//                                 experience.errors.position && (
//                                     <p>{experience.errors.position}</p>
//                                 )}
//                             <input
//                                 type="text"
//                                 placeholder="Start Date"
//                                 value={experience.startDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "startDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors &&
//                                 experience.errors.startDate && (
//                                     <p>{experience.errors.startDate}</p>
//                                 )}
//                             <input
//                                 type="text"
//                                 placeholder="End Date"
//                                 value={experience.endDate}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "endDate",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                             {experience.errors && experience.errors.endDate && (
//                                 <p>{experience.errors.endDate}</p>
//                             )}
//                             <textarea
//                                 placeholder="Description"
//                                 value={experience.description}
//                                 onChange={(e) =>
//                                     handleExperienceChange(
//                                         index,
//                                         "description",
//                                         e.target.value
//                                     )
//                                 }
//                             ></textarea>
//                             {experience.errors &&
//                                 experience.errors.description && (
//                                     <p>{experience.errors.description}</p>
//                                 )}
//                             <button
//                                 className="remove-experience"
//                                 onClick={() => removeExperience(index)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="experience_buttons">
//                     <button className="add-experience" onClick={addExperience}>
//                         Add Experience
//                     </button>
//                     <button className="save-experience" onClick={handleSubmit}>
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ExperienceDetailsTemplate2;

// updated working code above

import React, { useState, useEffect } from "react";

const ExperienceDetailsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("experiences");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (Array.isArray(parsedData)) {
                setExperiences(parsedData);
            } else {
                setExperiences([]);
            }
        } else {
            setExperiences([]);
        }
    }, []);

    const addExperience = () => {
        setExperiences((prevExperiences) => [
            ...prevExperiences,
            {
                company: "",
                position: "",
                startYear: "",
                endYear: "",
                description: "",
                errors: {},
            },
        ]);
    };

    // const handleExperienceChange = (index, property, value) => {
    //     setExperiences((prevExperiences) =>
    //         prevExperiences.map((experience, experienceIndex) => {
    //             if (experienceIndex === index) {
    //                 if (
    //                     property === "description" &&
    //                     experience.description.trim() === null &&
    //                     value.trim() !== ""
    //                 ) {
    //                     value = "• " + value; // Add bullet point at the beginning
    //                 }
    //                 return { ...experience, [property]: value };
    //             }
    //             return experience;
    //         })
    //     );
    // };

    // const handleExperienceChange = (index, property, value) => {
    //     setExperiences((prevExperiences) =>
    //         prevExperiences.map((experience, experienceIndex) => {
    //             if (experienceIndex === index) {
    //                 if (
    //                     property === "description" &&
    //                     experience.description.trim() === ""
    //                 ) {
    //                     value = "• " + value; // Add bullet point at the beginning
    //                 }
    //                 return { ...experience, [property]: value };
    //             }
    //             return experience;
    //         })
    //     );
    // };

    const handleExperienceChange = (index, property, value) => {
        setExperiences((prevExperiences) =>
            prevExperiences.map((experience, experienceIndex) => {
                if (experienceIndex === index) {
                    if (
                        property === "description" &&
                        experience.description.trim() === ""
                    ) {
                        value = "• " + value.trimStart(); // Add bullet point at the beginning
                    }
                    return { ...experience, [property]: value };
                }
                return experience;
            })
        );
    };

    const removeExperience = (index) => {
        setExperiences((prevExperiences) =>
            prevExperiences.filter(
                (experience, experienceIndex) => experienceIndex !== index
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        const updatedExperiences = experiences.map((experience) => {
            const { company, position, startYear, endYear, description } =
                experience;

            // Perform validations
            const errors = {};

            if (company.trim() === "") {
                errors.company = "Company cannot be empty";
                isValid = false;
            }

            if (position.trim() === "") {
                errors.position = "Position cannot be empty";
                isValid = false;
            }

            if (startYear.trim() === "") {
                errors.startYear = "Start Year cannot be empty";
                isValid = false;
            }

            if (endYear.trim() === "") {
                errors.endYear = "End Year cannot be empty";
                isValid = false;
            }

            if (startYear.trim() !== "" && endYear.trim() !== "") {
                if (parseInt(startYear) >= parseInt(endYear)) {
                    errors.startYear =
                        "Start Year should be less than End Year";
                    isValid = false;
                }
            }

            if (description.trim() === "") {
                errors.description = "Description cannot be empty";
                isValid = false;
            } else if (description.trim().split(" ").length > 50) {
                errors.description = "Description cannot exceed 50 words";
                isValid = false;
            }

            return { ...experience, errors };
        });

        if (isValid) {
            // Save data to local storage
            localStorage.setItem(
                "experiences",
                JSON.stringify(updatedExperiences)
            );

            // Update the state
            setExperiences(updatedExperiences);
        } else {
            // Update the state with the error messages
            setExperiences(updatedExperiences);
        }
    };

    const handleDescriptionKeyPress = (e, index) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleExperienceChange(
                index,
                "description",
                e.target.value + "\n• "
            );
        }
    };

    const getYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 50; i--) {
            years.push(i);
        }
        return years.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
        ));
    };

    const calculateTextareaRows = (content) => {
        const lines = content.split("\n");
        return lines.length;
    };

    return (
        <>
            <div className="experience">
                <h2 className="experience_heading">Experience</h2>
                <div className="experience_content">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experience_item">
                            <input
                                type="text"
                                placeholder="Company"
                                value={experience.company}
                                onChange={(e) =>
                                    handleExperienceChange(
                                        index,
                                        "company",
                                        e.target.value
                                    )
                                }
                            />
                            {experience.errors && experience.errors.company && (
                                <p>{experience.errors.company}</p>
                            )}
                            <input
                                type="text"
                                placeholder="Position"
                                value={experience.position}
                                onChange={(e) =>
                                    handleExperienceChange(
                                        index,
                                        "position",
                                        e.target.value
                                    )
                                }
                            />
                            {experience.errors &&
                                experience.errors.position && (
                                    <p>{experience.errors.position}</p>
                                )}
                            <select
                                value={experience.startYear}
                                onChange={(e) =>
                                    handleExperienceChange(
                                        index,
                                        "startYear",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">Start Year</option>
                                {getYearOptions()}
                            </select>
                            {experience.errors &&
                                experience.errors.startYear && (
                                    <p>{experience.errors.startYear}</p>
                                )}
                            <select
                                value={experience.endYear}
                                onChange={(e) =>
                                    handleExperienceChange(
                                        index,
                                        "endYear",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">End Year</option>
                                {getYearOptions()}
                                <option value="Present">Present</option>
                            </select>
                            {experience.errors && experience.errors.endYear && (
                                <p>{experience.errors.endYear}</p>
                            )}
                            <textarea
                                placeholder="Description"
                                value={experience.description}
                                onChange={(e) =>
                                    handleExperienceChange(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }
                                onKeyDown={(e) =>
                                    handleDescriptionKeyPress(e, index)
                                }
                                rows={calculateTextareaRows(
                                    experience.description
                                )}
                            ></textarea>
                            {experience.errors &&
                                experience.errors.description && (
                                    <p>{experience.errors.description}</p>
                                )}
                            <button
                                className="remove-experience"
                                onClick={() => removeExperience(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div className="experience_buttons">
                    <button className="add-experience" onClick={addExperience}>
                        Add Experience
                    </button>
                    <button className="save-experience" onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default ExperienceDetailsTemplate2;
