import React, { useState } from "react";
import { TextBoxCompV1 } from "../components/TextBoxCompV1";
import "../styles.css";

export const LoginScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="main_container w-full h-full flex justify-center items-center ">
      <div className="borderColor flex flex-col justify-center items-center  w-6/12 ">
        <div className="w-5/12 h-20 bg-yellow-400 my-8 flex justify-center items-center">
          <label htmlFor="logo" className="">
            Logo
          </label>
        </div>
        <div className="w-9/12">
          <TextBoxCompV1
            textValue={emailAddress}
            updateTextValue={setEmailAddress}
            placeHolderText={"Email Address"}
            typevalue={"text"}
          ></TextBoxCompV1>
        </div>
        <div className="w-9/12 my-8">
          <TextBoxCompV1
            textValue={password}
            updateTextValue={setPassword}
            placeHolderText={"Password"}
            typevalue={"password"}
          ></TextBoxCompV1>
        </div>
        <div className="flex justify-start w-9/12 mb-7">
          <input type="checkbox" className="mr-2" />
          <label htmlFor="rememberMe" className="text-red-500 text-sm">
            Remember me
          </label>
        </div>
        <div className="w-9/12 borderColor bg-red-500 mb-5">
          <button className="text-l text-center py-2 w-full text-white">Submit</button>
        </div>
        <div className="flex justify-between  w-11/12 mb-5">
          <label htmlFor="forgotPassword" className="text-red-500 text-sm underline italic">
            Forgot password?
          </label>
          <label htmlFor="forgotPassword" className="text-red-500 text-sm underline italic">
            Don't have an account? Register here
          </label>
        </div>
      </div>
    </div>
  );
};
