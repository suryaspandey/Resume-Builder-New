import React from "react";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";

export default function PreviewProjectDetailsTemplate2({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const handleTitleClick = (codeUrl) => {
        if (codeUrl) {
            window.open(codeUrl, "_blank");
        }
    };
    return (
        <>
            <div className="resume_item resume_work">
                <div className="title">
                    <p
                        style={{
                            color: backgroundColor,
                            fontFamily: tempfontStyle,
                        }}
                        className="bold"
                    >
                        PROJECTS
                    </p>
                </div>
                <ul>
                    {savedProjects.map((project, index) => (
                        <li>
                            <div key={index}>
                                <div
                                    // autoSize
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "none",
                                        color: textColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        cursor: "pointer",
                                    }}
                                    className="expTitle titletextsize work_exp_hover"
                                    onClick={() =>
                                        handleTitleClick(project.codeUrl)
                                    }
                                >
                                    {project.title}
                                </div>

                                <div className="school-clg-name-container">
                                    <MdWorkHistory
                                        style={{ color: themeColor }}
                                    />
                                    <div
                                        style={{
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {project.companyName}
                                    </div>
                                </div>
                                {/* <div className="project-links">
                                    <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        >
                                            {project.codeUrl}
                                        </div>
                                    </div>
                                    {/* <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{
                                                marginRight: "5px",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            name="hostedUrl"
                                            placeholder="Hosted URL"
                                            value={project.hostedUrl}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                            onFocus={() => setIsEditing(true)}
                                            style={{
                                                fontFamily: tempfontStyle,
                                                fontSize: tempfontSize,
                                            }}
                                        />
                                        {project.errors.hostedUrl && (
                                            <p>{project.errors.hostedUrl}</p>
                                        )}
                                    </div> 
                                </div> */}
                                <div className="project-description">
                                    <div
                                        style={{
                                            wordWrap: "break-word",
                                            border: "none",
                                            backgroundColor: "transparent",
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
