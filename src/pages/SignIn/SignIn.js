import { useState, useReducer } from "react";
import { httpRequest } from "../../API/api";
import "./SignIn.css";
export const SignIn = () => {
  const [isSignIn, showHideSignIn] = useState(true);

  const initialState = {
    name: "",
    phone_no: "",
    address: "",
    password: "",
    signInMobile: "",
    signInPassword: "",
  };

  const signupReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        return { ...state, [action.payload.name]: action.payload.value };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(signupReducer, initialState);
  const handleInputChange = (event) => {
    return dispatch({
      type: "UPDATE_INPUT",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const signUp = (event, isSignIn) => {
    httpRequest(
      state,
      isSignIn ? "userAuthentication.php" : "createUser.php"
    ).then((data) => {
      console.log(data);
    });
  };
  return (
    <>
      {isSignIn ? (
        <div className="signInContainer spacing">
          <div className="signInHeading spacing product-headding">Sign In</div>
          <div className="mobile spacing">
            <input
              type="text"
              className="signInControl"
              value={state.signInMobile}
              name="signInMobile"
              onChange={handleInputChange}
              placeholder="Enter Your Mobile Number"
            />
          </div>
          <div className="password spacing">
            {" "}
            <input
              className="signInControl "
              value={state.signInPassword}
              onChange={handleInputChange}
              placeholder="Enter Your Password"
              name="signInPassword"
              type="password"
            />
          </div>
          <div className="button spacing">
            <button className="addbtn" onClick={()=>signUp(true)}>
              Sign In
            </button>
          </div>
          <div className="signUpText product-headding spacing">
            New here ?{" "}
            <span
              onClick={() => showHideSignIn(false)}
              style={{ color: "green", cursor:"pointer" }}
            >
              {" "}
              Create Account
            </span>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="signInContainer">
            <div className="signInHeading spacing product-headding">
              Sign Up
            </div>
            <div className="mobile spacing">
              <input
                type="text"
                value={state.name}
                name="name"
                onChange={handleInputChange}
                className="signInControl"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mobile spacing">
              <input
                type="text"
                name="phone_no"
                onChange={handleInputChange}
                className="signInControl"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="address spacing">
              <textarea
                className="signInControl textArea"
                placeholder="Enter Your Address"
                rows="4"
                name="address"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="password spacing">
              <input
                className="signInControl "
                placeholder="Enter Your Password"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="button">
              <button className="addbtn" onClick={signUp}>
                Sign Up
              </button>
            </div>
            <div className="signUpText product-headding spacing">
              Already have an Account ?{" "}
              <span
                onClick={() => showHideSignIn(true)}
                style={{ color: "green", cursor:"pointer" }}
              >
                {" "}
                Sign In
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
