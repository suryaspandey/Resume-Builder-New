import { useEffect, useState } from "react";

const GifContainer = () => {
    const img1 =
        "https://cdn.dribbble.com/users/650464/screenshots/5932778/apply-for-job-icon-motion-graphic_v1.gif";
    const img3 =
        "https://careeramaze.com/wp-content/uploads/2021/01/Profile-data.gif";

    const img2 =
        "https://www.shrm.org/hr-today/news/hr-magazine/summer2021/PublishingImages/Pages/what-your-hr-resume-should-look-like-after-the-pandemic/tips-resume-pandemic-new.jpg";

    const img4 =
        "https://www.vecteezy.com/video/14213066-recruiters-choose-job-candidates-looking-through-resumes-or-cv-hiring-team-search-for-work-applicant-employment-and-hr-motion-illustration";
    const [currentImage, setCurrentImage] = useState(img1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev === img1 ? img3 : img1));
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    return <img src={currentImage} alt="" height={300} width={300} />;
};

export default GifContainer;
