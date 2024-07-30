import React from "react";
import"./movie.css"
export const Movie = () => {
  const query = location.search;
  const params = new URLSearchParams(query);
  const queryId = Number(params.get("id"));

  return (
      <div className="container-card-movie">

    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Usuarios de Google Los superhéroes se alían para vencer al poderoso
            Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra
            reunir las seis gemas del infinito: poder, tiempo, alma, realidad,
            mente y espacio, nadie podrá detenerlo.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  );
};
