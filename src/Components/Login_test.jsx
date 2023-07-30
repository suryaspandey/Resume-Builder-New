import React from "react";

export default function Login_test() {
    return (
        <form>
            <div className="container">
                <label>Username : </label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    required
                />
                <label>Password : </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                />

                <button type="submit">Login</button>
                <input type="checkbox" checked />
                <span>Remember me</span>
                <button type="button" className="cancelbtn">
                    Cancel
                </button>
                <span>
                    Forgot <a href="#">password?</a>
                </span>
            </div>
        </form>
    );
}
