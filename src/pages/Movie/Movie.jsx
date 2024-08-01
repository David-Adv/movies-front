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
    const url = `http://localhost:3000/movies/${queryId}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-all">
      <div className="container-card-movie">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{data.title}</h1>
              <p className="py-6">{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      <Comments idMovie={queryId}></Comments>
    </div>
  );
};
