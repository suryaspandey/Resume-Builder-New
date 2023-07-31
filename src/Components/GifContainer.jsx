import { useEffect, useState } from "react";

const GifContainer = () => {
    const img1 =
        "https://cdn.dribbble.com/users/650464/screenshots/5932778/apply-for-job-icon-motion-graphic_v1.gif";
    const img2 =
        "https://careeramaze.com/wp-content/uploads/2021/01/Profile-data.gif";
    const [currentImage, setCurrentImage] = useState(img1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev === img1 ? img2 : img1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <img src={currentImage} alt="" height={350} width={350} />;
};

export default GifContainer;
