// Logout.js
import React from "react";
import { auth } from "../firebaseConfig";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();
    const handleLogout = async () => {
        try {
            await auth.signOut();
            history.push("/home");
            // Logout successful, you can redirect the user or show a success message
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
