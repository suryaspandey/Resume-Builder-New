import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

const ProfilePhotoTemplate3 = ({ onPhotoSelect, background }) => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);

    useEffect(() => {
        const storedPhoto = localStorage.getItem("profilePhoto");
        if (storedPhoto) {
            setPhotoUrl(storedPhoto);
            setIsUploaded(true);
            onPhotoSelect(storedPhoto);
        }
    }, []);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoUrl(reader.result);
                setIsUploaded(true);
                onPhotoSelect(reader.result);
                localStorage.setItem("profilePhoto", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemovePhoto = () => {
        setPhotoUrl("");
        setIsUploaded(false);
        onPhotoSelect("");
        localStorage.removeItem("profilePhoto");
    };

    if (typeof onPhotoSelect !== "function") {
        // Handle the case where onPhotoSelect is not a function (optional)
        console.error("onPhotoSelect is not a function.");
        return null;
    }

    return (
        <div className="profile-photo">
            {!isUploaded ? (
                <input
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={handlePhotoChange}
                />
            ) : (
                <>
                    <img
                        src={photoUrl}
                        alt="Profile"
                        // className="photo-preview"
                        style={{
                            border: `2px solid ${background}`,
                            padding: "4px",
                            height: "150px",
                            width: "150px",
                        }}
                    />
                    <button onClick={handleRemovePhoto}>
                        <MdCancel />
                    </button>
                </>
            )}
        </div>
    );
};

export default ProfilePhotoTemplate3;
