// Login.js
import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Input, Button, Alert } from "antd";
import "../components/login_registration_logout.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import app, { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();
    // const auth = getAuth(app);

    const handleLogin = async (values) => {
        try {
            await auth.signInWithEmailAndPassword(
                values.email,
                values.password
            );

            history.push("/");
        } catch (error) {
            console.error("Error during login:", error);
            if (values.password.length < 6) {
                setErrorMessage("Password should be at least 6 characters");
            }
            if (!values.email || !values.password) {
                setErrorMessage("Invalid Email ID or Password");
            } else {
                setErrorMessage(error.message.split(":")[1]);
            }
        }
    };

    const handleLoginNew = async (values) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                history.push("/");
                console.log("user" + user);
                // ...
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.message);
            });
    };

    return (
        <div className="login_main">
            <div className="register-owl-img">
                <img
                    src="./template_previews/login_owl1.gif"
                    height={200}
                    width={300}
                />
            </div>
            <div className="login_container">
                <img
                    src="./template_previews/Resume_Logo.png"
                    height={40}
                    width={40}
                    style={{ borderRadius: "50%" }}
                />
                <h2
                    style={{
                        textAlign: "center",
                        color: "#006370",

                        fontFamily: "Oswald",
                        fontWeight: "bold",
                    }}
                >
                    Login
                </h2>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={handleLogin}
                >
                    {({ isSubmitting }) => (
                        <Form onFinish={handleLogin}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your email",
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        border: "1px solid #dee2e6",
                                        padding: "5px !important",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your password",
                                    },
                                ]}
                            >
                                <Input.Password
                                    style={{ border: "1px solid #dee2e6" }}
                                />
                            </Form.Item>

                            <Form.Item style={{ textAlign: "center" }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={isSubmitting}
                                >
                                    Login
                                </Button>
                            </Form.Item>
                            <div>
                                <ErrorMessage name="email" component="div" />
                                <ErrorMessage name="password" component="div" />
                            </div>
                            {errorMessage && (
                                <div
                                    className="error-message"
                                    style={{
                                        color: "red",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {errorMessage}
                                </div>
                            )}
                            <div className="registration_route">
                                <h6 style={{ textAlign: "center" }}>
                                    Don't have an account?
                                    <span>
                                        <Link
                                            to="/register"
                                            style={{ fontStyle: "Italic" }}
                                        >
                                            Register
                                        </Link>
                                    </span>
                                </h6>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
