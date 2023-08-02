import React from "react";

export default function PreviewCertificationsTemplate2({
    themeColor,
    textColor,
    tempfontSize,
    tempfontStyle,
    backgroundColor,
}) {
    const savedCertification =
        JSON.parse(localStorage.getItem("certifications")) || [];
    return (
        <>
            <div
                className="resume_item resume_work"
                style={{ backgroundColor: backgroundColor }}
            >
                <div className="title">
                    <p
                        className="bold"
                        style={{
                            fontFamily: tempfontStyle,
                        }}
                    >
                        Certifications
                    </p>
                </div>
                <ul>
                    {savedCertification.map((certification, index) => (
                        <li key={index}>
                            <div>
                                <div
                                    // autoSize
                                    style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        color: "white",
                                    }}
                                    // maxLength={50}
                                    className="certif_textarea temp2name expTitle"
                                    // type="text"
                                    // placeholder="Certification Name"
                                    // value={certification.certificationName}
                                    // onChange={(e) =>
                                    //     handleCertificationChange(
                                    //         index,
                                    //         "certificationName",
                                    //         e.target.value
                                    //     )
                                    // }
                                    // onFocus={() => setIsEditing(true)}
                                >
                                    {certification.certificationName}
                                </div>

                                <div
                                    // autoSize
                                    className="expCompanyName"
                                    // type="text"
                                    // placeholder="Organization/Institution"
                                    // value={certification.organization}
                                    // onChange={(e) =>
                                    //     handleCertificationChange(
                                    //         index,
                                    //         "organization",
                                    //         e.target.value
                                    //     )
                                    // }
                                    // onFocus={() => setIsEditing(true)}
                                    style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        // color: textColor,
                                    }}
                                    // maxLength={30}
                                >
                                    {certification.organization}
                                </div>
                                {/* {certification.errors &&
                                    certification.errors.organization && (
                                        <p>
                                            {certification.errors.organization}
                                        </p>
                                    )} */}
                                <span
                                    className="date-width"
                                    // value={certification.year}
                                    // onChange={(e) =>
                                    //     handleCertificationChange(
                                    //         index,
                                    //         "year",
                                    //         e.target.value
                                    //     )
                                    // }
                                    // onFocus={() => setIsEditing(true)}
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                >
                                    {certification.year}

                                    {/* <option value="">Select Year</option>
                                    {getYearOptions()} */}
                                </span>
                                {/* {certification.errors &&
                                    certification.errors.year && (
                                        <p>{certification.errors.year}</p>
                                    )} */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
