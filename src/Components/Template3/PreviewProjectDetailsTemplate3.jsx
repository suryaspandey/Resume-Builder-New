import React from "react";
import { MdWorkHistory } from "react-icons/md";

export default function PreviewProjectDetailsTemplate3({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
    openTitleUrl,
}) {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const handleTitleClick = (codeUrl) => {
        if (codeUrl && openTitleUrl) {
            window.open(codeUrl, "_blank").focus();
        }
    };

    return (
        <>
            <section
                style={{
                    // borderTop: `2px solid ${backgroundColor}`,
                    margin: "0 20px",
                }}
            >
                <div>
                    <h1
                        // className="sectionTitle"
                        style={{
                            color: "white",
                            fontFamily: tempfontStyle,
                            fontStyle: "italic",
                            fontSize: "1.2em",
                            backgroundColor: backgroundColor,
                        }}
                    >
                        Project Details
                    </h1>
                </div>

                {/* <div className="sectionContent"> */}
                <div>
                    {savedProjects.map((project, index) => (
                        <div key={index}>
                            <article>
                                <div
                                    // autoSize
                                    className="expTitle titletextsize "
                                    style={{
                                        minHeight: "50px",
                                        resize: "none",
                                        overflow: "hidden",
                                        fontWeight: 900,
                                        color: backgroundColor,
                                        fontFamily: tempfontStyle,
                                        width: "100%",
                                    }}
                                    onClick={() =>
                                        handleTitleClick(project.codeUrl)
                                    }
                                >
                                    {project.title}
                                </div>

                                <div
                                    className="school-clg-name-container"
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center",
                                    }}
                                >
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
                                {/* <div className="project-links">
                                    <div>
                                        <RiLinksFill
                                            color={themeColor}
                                            style={{ marginRight: "5px" }}
                                        />
                                        <input
                                            type="text"
                                            name="codeUrl"
                                            placeholder="Code URL"
                                            value={project.codeUrl}
                                            onChange={(e) =>
                                                handleChange(e, index)
                                            }
                                            onFocus={() => setIsEditing(true)}
                                        />
                                        {project.errors.codeUrl && (
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
                                    </div> 
                                </div> */}
                                <div
                                    className="project-description"
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                >
                                    <div
                                        className="summaryTextareaClass_project"
                                        style={{
                                            wordWrap: "break-word",
                                            border: "none",
                                            backgroundColor: "transparent",
                                            // fontFamily: tempfontStyle,
                                            // fontSize: tempfontSize,
                                            width: "100%",
                                        }}
                                    ></div>
                                    {project.description}
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
