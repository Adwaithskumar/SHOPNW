import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  

  const initialValues = { name: "", phonenumber: "", companyname: "", email: "", confirmpassword: "" , password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.name) {
        errors.email = "Name is required!";
      } else if (!regex.test(values.name)) {
        errors.email = "This is not a valid email format!";
      }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } 

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (values.password !== "aaaaa") {
      errors.password = "Incorrect Passowrd";
    }
    return errors;
  };
  return (
    <div>
      <div className="cover">
        <div className="login">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            navigate("/")
          ) : (
            <h2>Unsc</h2>
          )}
          <form className="login_form" onSubmit={handleSubmit}>
            <h1>Register Here</h1>
            <input
              type="text"
              name="name"
              placeholder="FullName"
              value={formValues.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              value={formValues.companyname}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phonenumber"
              placeholder="Phonenumber"
              value={formValues.phonenumber}
              onChange={handleChange}
            />
          
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Passoword"
              value={formValues.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Passoword"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-outline-dark ">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
