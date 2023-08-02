import React from "react";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";

export default function PreviewProjectDetailsTemplate1({
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
            <section
                style={{
                    borderTop: `2px solid ${backgroundColor}`,
                }}
            >
                <div
                    className="sectionTitle"
                    style={{
                        fontFamily: tempfontStyle,
                        color: backgroundColor,
                    }}
                >
                    <h1>Project Details</h1>
                </div>

                <div className="sectionContent">
                    {savedProjects.map((project, index) => (
                        <div key={index}>
                            <article>
                                <div
                                    className="expTitle titletextsize work_exp_hover"
                                    style={{
                                        minHeight: "50px",
                                        resize: "none",
                                        overflow: "hidden",
                                        fontWeight: 600,
                                        color: backgroundColor,
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        handleTitleClick(project.codeUrl)
                                    }
                                >
                                    {project.title}
                                </div>

                                <div className="school-clg-name-container-preview">
                                    <MdWorkHistory
                                        style={{ color: themeColor }}
                                    />
                                    <div
                                        style={{
                                            color: textColor,
                                            fontFamily: tempfontStyle,
                                            fontSize: tempfontSize,
                                        }}
                                    >
                                        {project.companyName}
                                    </div>
                                </div>
                                {/* <div className="project-links"> */}
                                {/* <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{ marginRight: "5px" }}
                                        />
                                        <div>{project.codeUrl}</div>
                                        {/* {project.errors.codeUrl && (
                                            <p>{project.errors.codeUrl}</p>
                                        )} 
                                    </div> 
                                    {/* <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{ marginRight: "5px" }}
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
                                        />
                                        {project.errors.hostedUrl && (
                                            <p>{project.errors.hostedUrl}</p>
                                        )}
                                    </div> */}
                                {/* </div> */}
                                <div className="project-description">
                                    <div
                                        className="summaryTextareaClass_project"
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
                            </article>
                        </div>
                    ))}
                </div>
                <div class="clear"></div>
            </section>
        </>
    );
}
