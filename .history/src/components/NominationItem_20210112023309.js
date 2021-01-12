import React, { useContext, useState } from "react";
import {
  AllMoviesContext,
  NominatedMoviesContext,
  ShowBannerContext,
} from "../ContextFile";

export default function NominationItem({ movie }) {
  let { nominatedMovies, setNominatedMovies } = useContext(
    NominatedMoviesContext
  );

  const [removedFromSearchList, setRemovedFromSearchList] = useState(false);
  const { setShowBanner } = useContext(ShowBannerContext);

  const { allMovies, setAllMovies } = useContext(AllMoviesContext);

  const removeNominations = () => {
        // let filteredNomMovies = nominatedMovies.filter(
        //   (nmovies) => nmovies !== movie
        // );
        // setNominatedMovies(filteredNomMovies);
        // localStorage.setItem("n-movies", JSON.stringify(filteredNomMovies));

        // alert("Removed from Local Storage");
        // setShowBanner(false);
      console.log(movie)
  };

  const removeFromSearch = () => {
    let totalRemainingMovies = allMovies.filter(
      (movies) => movies.Year !== movie.Year && movies.Title !== movie.Title
    );
    setAllMovies(totalRemainingMovies);
    setRemovedFromSearchList(true);
    alert("Removed from search list");
  };

  const addBackToSearchList = () => {
    let totalRemainingMovies = [movie, ...allMovies];
    setAllMovies(totalRemainingMovies);
    setRemovedFromSearchList(false);
    alert("Added back to search list");
  };

  return (
    <ul className="list">
      <li className="list-item">
        {movie.Title}, ({movie.Year})
        <button onClick={removeNominations} className="btn btn-outline-danger">
          Remove
        </button>
        {allMovies.length > 0 && (
          <>
            {removedFromSearchList ? (
              <button
                onClick={addBackToSearchList}
                className="btn btn-outline-success"
              >
                Add back to search list
              </button>
            ) : (
              <button
                onClick={removeFromSearch}
                className="btn btn-outline-danger"
              >
                Remove from search list
              </button>
            )}
          </>
        )}
      </li>
    </ul>
  );
}
