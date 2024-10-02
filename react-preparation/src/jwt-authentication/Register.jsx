import { useState, useCallback, useMemo, useContext } from "react";
import "./styles.css";
import AuthContext from "./contexts/AuthProvider";
import axios from "axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const { auth, setAuth } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
    matchPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  function debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }

  const validateUserName = useCallback(
    debounce((value) => {
      const isValidUserName = USER_REGEX.test(value);
      setErrors((prev) => ({
        ...prev,
        userName: isValidUserName
          ? ""
          : "Invalid username. Please follow the correct pattern.",
      }));
    }, 300),
    []
  );

  const validatePassword = useCallback(
    debounce((value) => {
      const isValidPassword = PWD_REGEX.test(value);
      setErrors((prev) => ({
        ...prev,
        password: isValidPassword
          ? ""
          : "Password must contain at least one uppercase, lowercase, number, and special character.",
      }));
    }, 300),
    []
  );

  const inputField = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (name === "userName") validateUserName(value);
      if (name === "password") validatePassword(value);
    },
    [validateUserName, validatePassword]
  );

  const submitForm = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.matchPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (errors.userName || errors.password) {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          userName: formValues.userName,
          password: formValues.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const accessToken = response?.body?.accessToken;
      const roles = response?.body?.roles;
      setAuth({
        userName: formValues.userName,
        password: formValues.password,           
        roles,
        accessToken,
      });
      setFormValues({
        userName: "",
        password: "",
        matchPassword: "",
      });
      console.log(auth)
    } catch (error) {
      alert("Error: " + error);
    }

    console.log("Form Successfully Submitted: ", formValues);
  };

  const isSubmitDisabled = useMemo(() => {
    return (
      !formValues.userName ||
      !formValues.password ||
      !formValues.matchPassword ||
      errors.userName ||
      errors.password
    );
  }, [formValues, errors]);

  return (
    <div className="form-container">
      <form onSubmit={submitForm} className="form">
        <h2 className="form-heading">Create an Account</h2>

        <div className="form-group">
          <label htmlFor="userName" className="label">
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="input"
            value={formValues.userName}
            onChange={inputField}
          />
          {errors.userName && (
            <p className="error-message">{errors.userName}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            value={formValues.password}
            onChange={inputField}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="matchPassword" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            name="matchPassword"
            id="matchPassword"
            className="input"
            value={formValues.matchPassword}
            onChange={inputField}
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitDisabled}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
