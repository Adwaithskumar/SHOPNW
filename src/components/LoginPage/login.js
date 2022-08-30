/** Login page */

import React, { useEffect, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  /** @function[<handleChange>]
   * takes the values from the input box 
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /** @function[<handleSubmit>]
   * calls the validate function to check the form values
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("token", "3000");
      console.log(formValues);
    }
  }, [formErrors]);

    /** @function[<validate>]
   * cheks if the form values meets all the regulations and validations
   */



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (values.email !== "adwaith@gmail.com") {
      errors.email = "Incorrect Email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (values.password !== "adwaith") {
      errors.password = "Incorrect Passowrd";
    }
    return errors;
  };
  return (
    <>
      <div className="cover">
        <div className="login">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            navigate("/dashboard")
          ) : (
            <h2>.</h2>
          )}

          <form className="login_form" onSubmit={handleSubmit}>
            <h1>Login Here</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
            <input
              type="password"
              name="password"
              placeholder="Passoword"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
            <button type="submit" className="btn btn-outline-dark ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
