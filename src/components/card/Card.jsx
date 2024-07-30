import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({movie,ind}) => {

  const { Title, Year, imdbID, Type, Distributors, Poster } = movie;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={Poster}
      alt="Shoes" 
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions"> 
    <Link to={`/movie?id=${ind}`}> 
       <button className="btn btn-primary">View movie</button>
     </Link> 
    </div>
  </div>
</div>

  )
}
