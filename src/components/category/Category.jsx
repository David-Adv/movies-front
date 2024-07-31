import React from "react";

export const Category = ({ category, checked, onChange }) => {
  return (
    <>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "3px ",
        }}
      >
        <span style={{ fontSize: "20px" }} className="label-text">
          {category}
        </span>
        {/* <input type="checkbox" className='category-cb' /> */}
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="checkbox checkbox-info checkbox-xs"
        />
      </label>

      {/* <div className="form-control">
<label className="cursor-pointer label">
    <span className="label-text">Remember me</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
</label>
</div> */}
    </>
  );
};
