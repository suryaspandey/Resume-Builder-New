import React from "react";
import "../Components/footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div class="footer-text">
                <h6>
                    Copyright &copy; 2023 MyResumeBuilder. All Rights Reserved
                </h6>
            </div>

            <div class="footer-icon">
                <a href="https://www.facebook.com/">
                    <i class="fa-brands fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.twitter.com/">
                    <i class="fa-brands fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/">
                    <i class="fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="https://linkedin.com/">
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                </a>
            </div>
        </div>
    );
}
