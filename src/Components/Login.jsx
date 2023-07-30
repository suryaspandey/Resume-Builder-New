// Login.js
import React from "react";
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
            alert("Invalid credentials");
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
            {/* <div className="login_left">
                <h1>Login Left</h1>
            </div> */}
            {/* <div className="login_container"> */}
            <div className="login_container">
                <h2>Login</h2>
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
        </div>
    );
};

export default Login;
