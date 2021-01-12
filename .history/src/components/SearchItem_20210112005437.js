import React, { useState, useContext, useEffect } from "react";
import { NominatedMoviesContext, ShowBannerContext } from "../ContextFile";
import "../Pages/Home.css";

export default function SearchItem({ movie }) {
  useEffect(() => {}, []);

  const { nominatedMovies, setNominatedMovies } = useContext(
    NominatedMoviesContext
  );


  const [nominated, setNominated] = useState(false);

  const { showBanner, setShowBanner } = useContext(ShowBannerContext);

  const nominateMovie = () => {
    if (!showBanner) {
      setNominated((prevValue) => !prevValue);
      let tempObj = { ...movie, isNominated: true };

      alert("Added a nomination");

      setNominatedMovies((prevValue) => [...prevValue, tempObj]);
      localStorage.setItem(
        "n-movies",
        JSON.stringify([...nominatedMovies, tempObj])
      );
    //   console.log(tempObj);
    }

    if (nominatedMovies.length + 1 === 5) {
      setShowBanner(true);
    }
  };

  return (
    <ul className="list">
      <li className="list-item">
        {movie.Title}, ({movie.Year})
        <>
          {nominated ? (
            <button className="btn btn-outline-success disabled">
              Nominate
            </button>
          ) : (
            <button onClick={nominateMovie} className="btn btn-outline-success">
              Nominate
            </button>
          )}
        </>
      </li>
    </ul>
  );
}
