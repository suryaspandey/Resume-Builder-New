import { useEffect, useState } from "react";
import {
    AiFillDelete,
    AiOutlinePlusCircle,
    AiOutlineLink,
} from "react-icons/ai";

const CertificationsTemplate2 = ({
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
}) => {
    const [certifications, setCertificates] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("certifications");

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (Array.isArray(parsedData)) {
                setCertificates(parsedData);
            } else {
                setCertificates([]);
            }
        } else {
            setCertificates([]);
        }
    }, []);

    const addCertifications = () => {
        setCertificates((prevCertifications) => [
            ...prevCertifications,
            {
                certificationName: "",
                organization: "",
                year: "",
                errors: {},
            },
        ]);
    };

    const removeCertification = (index) => {
        setCertificates((prevCertifications) =>
            prevCertifications.filter(
                (certification, certificationIndex) =>
                    certificationIndex !== index
            )
        );
    };

    const handleCertificationChange = (index, property, value) => {
        setCertificates((prevCertifications) =>
            prevCertifications.map((certification, certificationIndex) => {
                if (certificationIndex === index) {
                    return { ...certification, [property]: value };
                }
                return certification;
            })
        );
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
                    "Organization//Institution cannot be empty";
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

            setCertificates(updatedCertifications);
        } else {
            setCertificates(updatedCertifications);
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
                style={{
                    backgroundColor: backgroundColor, // Use the backgroundColor state variable
                }}
            >
                <div className="title">
                    <p className="bold">Trainings/Certifications</p>
                </div>
                <ul>
                    {certifications.map((certification, index) => (
                        <li>
                            <div key={index}>
                                <input
                                    className="temp2name expTitle"
                                    type="text"
                                    placeholder="Certification Name"
                                    value={certification.certificationName}
                                    onChange={(e) => {
                                        handleCertificationChange(
                                            index,
                                            "certificationName",
                                            e.target.value
                                        );
                                    }}
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
                                <button
                                    onClick={() => removeCertification(index)}
                                >
                                    <AiFillDelete />
                                </button>

                                <input
                                    className="expCompanyName"
                                    type="text"
                                    placeholder="Organization/Institution"
                                    value={certification.organization}
                                    onChange={(e) => {
                                        handleCertificationChange(
                                            index,
                                            "organization",
                                            e.target.value
                                        );
                                    }}
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
                                    onChange={(e) => {
                                        handleCertificationChange(
                                            index,
                                            "year",
                                            e.target.value
                                        );
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

            <button className="add-btn" onClick={addCertifications}>
                <AiOutlinePlusCircle />
            </button>
            <button className="save-btn" onClick={handleSubmit}>
                Save
            </button>
        </>
    );
};

export default CertificationsTemplate2;
