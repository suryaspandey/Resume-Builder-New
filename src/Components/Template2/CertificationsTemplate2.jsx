import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { Input } from "antd";
const { TextArea } = Input;

const CertificationsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) => {
    const [certifications, setCertifications] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedCertifications = localStorage.getItem("certifications");

        if (storedCertifications) {
            setCertifications(JSON.parse(storedCertifications));
        } else {
            setCertifications([
                {
                    certificationName: "",
                    organization: "",
                    year: "",
                    errors: {},
                },
            ]);
        }
    }, []);

    const addCertification = () => {
        setCertifications((prevCertifications) => [
            ...prevCertifications,
            {
                certificationName: "",
                organization: "",
                year: "",
                errors: {},
            },
        ]);
        setIsEditing(true);
    };

    const removeCertification = (index) => {
        setCertifications((prevCertifications) =>
            prevCertifications.filter(
                (_, certificationIndex) => certificationIndex !== index
            )
        );
    };

    const handleCertificationChange = (index, property, value) => {
        setCertifications((prevCertifications) =>
            prevCertifications.map((certification, certificationIndex) => {
                if (certificationIndex === index) {
                    return { ...certification, [property]: value };
                }
                return certification;
            })
        );
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        const updatedCertifications = certifications.map((certification) => {
            const { certificationName, organization, year } = certification;
            const errors = {};

            if (certificationName.trim() === "") {
                errors.certificationName = "Certification Name cannot be empty";
                isValid = false;
            }

            if (organization.trim() === "") {
                errors.organization =
                    "Organization/Institution cannot be empty";
                isValid = false;
            }

            if (year.trim() === "") {
                errors.year = "Year cannot be empty";
                isValid = false;
            }

            return { ...certification, errors };
        });

        if (isValid) {
            localStorage.setItem(
                "certifications",
                JSON.stringify(updatedCertifications)
            );
            setCertifications(
                updatedCertifications.map((certification) => ({
                    ...certification,
                    errors: {},
                }))
            );
            setIsEditing(false);
        } else {
            setCertifications(updatedCertifications);
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
                    {certifications.map((certification, index) => (
                        <li key={index}>
                            <div>
                                <textarea
                                    autoSize
                                    style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                    maxLength={50}
                                    className="certif_textarea temp2name expTitle"
                                    type="text"
                                    placeholder="Certification Name"
                                    value={certification.certificationName}
                                    onChange={(e) =>
                                        handleCertificationChange(
                                            index,
                                            "certificationName",
                                            e.target.value
                                        )
                                    }
                                    onFocus={() => setIsEditing(true)}
                                    // style={{ whiteSpace: "normal" }}
                                />
                                {certification.errors &&
                                    certification.errors.certificationName && (
                                        <p>
                                            {
                                                certification.errors
                                                    .certificationName
                                            }
                                        </p>
                                    )}

                                {isEditing && (
                                    <button
                                        onClick={() =>
                                            removeCertification(index)
                                        }
                                    >
                                        <AiFillDelete />
                                    </button>
                                )}

                                <TextArea
                                    autoSize
                                    className="expCompanyName"
                                    type="text"
                                    placeholder="Organization/Institution"
                                    value={certification.organization}
                                    onChange={(e) =>
                                        handleCertificationChange(
                                            index,
                                            "organization",
                                            e.target.value
                                        )
                                    }
                                    onFocus={() => setIsEditing(true)}
                                    style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                        // color: textColor,
                                    }}
                                    maxLength={30}
                                />
                                {certification.errors &&
                                    certification.errors.organization && (
                                        <p>
                                            {certification.errors.organization}
                                        </p>
                                    )}
                                <select
                                    className="date-width"
                                    value={certification.year}
                                    onChange={(e) =>
                                        handleCertificationChange(
                                            index,
                                            "year",
                                            e.target.value
                                        )
                                    }
                                    onFocus={() => setIsEditing(true)}
                                    style={{
                                        fontFamily: tempfontStyle,
                                        fontSize: tempfontSize,
                                    }}
                                >
                                    <option value="">Select Year</option>
                                    {getYearOptions()}
                                </select>
                                {certification.errors &&
                                    certification.errors.year && (
                                        <p>{certification.errors.year}</p>
                                    )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {isEditing && (
                <>
                    <button className="add-btn" onClick={addCertification}>
                        <AiOutlinePlusCircle />
                    </button>
                    <button className="save-btn" onClick={handleSubmit}>
                        Save
                    </button>
                </>
            )}
        </>
    );
};

export default CertificationsTemplate2;
