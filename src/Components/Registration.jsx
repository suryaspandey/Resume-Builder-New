import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Input, Button, Alert } from "antd";
import * as Yup from "yup";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "../components/login_registration_logout.css";

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
            <Alert>
                <p>Error during registration</p>
            </Alert>;
        }
    };

    return (
        <>
            <div className="registration">
                <h2>Registration</h2>
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
                                    style={{
                                        border: "1px solid #dee2e6",
                                        padding: "4px 11px",
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

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isSubmitting}
                                >
                                    Sign Up
                                </Button>
                            </Form.Item>
                            <div>
                                <ErrorMessage name="email" component="div" />
                                <ErrorMessage name="password" component="div" />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Registration;
