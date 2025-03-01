import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ movie, ind }) => {
  console.log(Object.values(movie));
  const { id, title, year, image, category, description, review } = movie;

  return (
    <div className="card w-96 shadow-xl " style={{border:"2px solid #0ef",
     boxShadow: "0 0 5px #0ef",
     backgroundColor: "#081b29", maxWidth:"350px"}}>
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {/* <p>{description}</p> */}
        <div className="card-actions">
          <Link to={`/movie?id=${id}`}>
            <button className="btn btn-primary" style={{background:"#0ef",border:"1px solid white",boxShadow: "0 0 2px white"}}>View movie</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
