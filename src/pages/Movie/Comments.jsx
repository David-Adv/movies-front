import React, { useEffect, useState } from "react";
import "./movie.css";
import { info } from "autoprefixer";

export const Comments = ({ idMovie, onCommentChange }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (onCommentChange) {
      onCommentChange(comment);
    }
  }, [comment, onCommentChange]);

  return (
    <textarea
      maxLength="200"
      className="textarea textarea-info"
      placeholder="Comment"
    ></textarea>
  );
};
