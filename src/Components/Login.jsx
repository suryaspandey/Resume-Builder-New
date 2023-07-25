// Login.js
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Input, Button, Alert } from "antd";
import "../components/login_registration_logout.css";

import * as Yup from "yup";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

const Login = () => {
    const history = useHistory();

    const handleLogin = async (values) => {
        try {
            await auth.signInWithEmailAndPassword(
                values.email,
                values.password
            );

            history.push("/");
        } catch (error) {
            console.error("Error during login:", error);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login_container">
            <h2>Login</h2>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({ isSubmitting }) => (
                    <Form onFinish={handleLogin}>
                        {/* <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div> */}

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
                            <Input.Password
                                style={{ border: "1px solid #dee2e6" }}
                            />
                        </Form.Item>

                        {/* <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div> */}
                        <Form.Item>
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
    );
};

export default Login;
