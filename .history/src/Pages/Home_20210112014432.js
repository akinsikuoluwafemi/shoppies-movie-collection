import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Nominations from "../components/Nominations";
import Banner from "../components/Banner";
import "./Home.css";
import {
  NominatedMoviesContext,
  AllMoviesContext,
  QueryContext,
  LoadingContext,
  ShowBannerContext,
} from "../ContextFile";

export default function Home() {
  useEffect(() => {
    if (nominatedMovies.length === 5) {
      setShowBanner(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [allMovies, setAllMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");

  const [showBanner, setShowBanner] = useState(false);

  const [nominatedMovies, setNominatedMovies] = useState(
    JSON.parse(localStorage.getItem("n-movies")) || []
  );


  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <AllMoviesContext.Provider value={{ allMovies, setAllMovies }}>
        <NominatedMoviesContext.Provider
          value={{ nominatedMovies, setNominatedMovies }}
        >
          <LoadingContext.Provider value={{ loading, setLoading }}>
            <ShowBannerContext.Provider value={{ showBanner, setShowBanner }}>
              <div className="home-wrapper">
                {showBanner && <Banner />}
                <div className="home-wrapper_search">
                  <SearchBar />
                </div>
                <div className=" search-wrapper">
                  <SearchResults />
                  <Nominations />
                </div>
              </div>
            </ShowBannerContext.Provider>
          </LoadingContext.Provider>
        </NominatedMoviesContext.Provider>
      </AllMoviesContext.Provider>
    </QueryContext.Provider>
  );
}
