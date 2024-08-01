import React, { useEffect, useState } from "react";
import "./movie.css";
import axios from "axios";
import { Comments } from "./Comments";
export const Movie = () => {
  const query = location.search;
  const params = new URLSearchParams(query);
  const queryId = Number(params.get("id"));

  const [data, setData] = useState([]);

  useEffect(() => {
    // const url = `http://localhost:3000/movies/${queryId}`;

    const fetchData = async () => {
      try {
        const response = await axios.get("../../../data.json");
        setData(response.data[queryId]);
        console.log(response);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-card-movie">
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={data.Poster} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{data.Title}</h1>
          <p className="py-6">{data.description}</p>
          <p className="py-6">Un promotor de boxeo y su hijo se unen de mala gana para construir y entrenar a un robot peleador que pelee por el campeonato.</p>

        </div>
      </div>
    </div>

      <Comments></Comments>

    </div>
  );
};
