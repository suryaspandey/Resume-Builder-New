import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Input, Button, Alert } from "antd";
import * as Yup from "yup";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "../components/login_registration_logout.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RegistrationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const Registration = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const handleRegistration = async (values) => {
        try {
            await auth.createUserWithEmailAndPassword(
                values.email,
                values.password
            );
            history.push("/");
        } catch (error) {
            console.error("Error during registration:", error);
            if (values.password !== values.confirmPassword) {
                setErrorMessage("Passwords do not match.");
            } else {
                setErrorMessage(error.message.split(":")[1]);
            }
        }
    };

    return (
        <>
            <div className="registration-container">
                <div className="register-owl-img">
                    <img
                        src="./template_previews/registration_owl.gif"
                        height={200}
                        width={300}
                    />
                </div>
                <div className="registration">
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
                            // backgroundColor: "#006370",
                            fontFamily: "Oswald",
                            fontWeight: "bold",
                        }}
                    >
                        Register
                    </h2>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        validationSchema={RegistrationSchema}
                        onSubmit={handleRegistration}
                    >
                        {({ isSubmitting }) => (
                            <Form onFinish={handleRegistration}>
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
                                        className="register-input-textbox"
                                        // style={{
                                        //     border: "1px solid #dee2e6",
                                        //     // padding: "2px !important",
                                        // }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter your password",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Password does not match",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item style={{ textAlign: "center" }}>
                                    <Button
                                        style={{
                                            background: "#006370",
                                            alignItems: "center",
                                        }}
                                        type="primary"
                                        htmlType="submit"
                                        loading={isSubmitting}
                                    >
                                        Sign Up
                                    </Button>
                                </Form.Item>
                                <div>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                    />
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
                                        Already have an account?
                                        <span>
                                            <Link
                                                to="/login"
                                                style={{ fontStyle: "Italic" }}
                                            >
                                                Login
                                            </Link>
                                        </span>
                                    </h6>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default Registration;
