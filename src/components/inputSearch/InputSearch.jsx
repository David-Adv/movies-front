import React from "react";
import "./inputSeach.css";
export const InputSearch = ({ value, onChange }) => {
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="search-bar"
          placeholder="Search..."
        />
      </div>
    </>
  );
};
