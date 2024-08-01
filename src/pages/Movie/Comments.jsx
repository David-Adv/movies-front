import React, { useState } from "react";
import "./movie.css";
import { info } from "autoprefixer";

export const Comments = ({ idMovie }) => {
  const [comment, setComment] = useState("");
  console.log(idMovie);

  const url = "http://localhost:3000/comments";

  const sendComment = async () => {
    try {
      const response = await axios.post(url);
      setData(response.data);
      const allCategories = response.data.map((item) => item.category);
      // console.log(allCategories);
      setCategory(Array.from(new Set(allCategories)));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comments-container">
      <textarea
        maxlength="200"
        className="textarea textarea-info"
        placeholder="Comment"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="btn btn-outline btn-info" onClick={sendComment}>
        Info
      </button>
    </div>
  );
};
