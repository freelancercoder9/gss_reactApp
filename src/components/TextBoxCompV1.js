import React from "react";
import "../styles.css";
export const TextBoxCompV1 = (props) => {
  return (
    <div className="w-full flex justify-center">
      <input
        className="borderColor w-full flex justify-center placeholder:text-sm placeholder:text-red-500 text-center text-black text-l py-2 focus:outline-none"
        placeholder={props.placeHolderText}
        value={props.textValue}
        onChange={(e) => {
          props.updateTextValue(e.target.value);
        }}
        type={props.typevalue}
      ></input>
    </div>
  );
};
