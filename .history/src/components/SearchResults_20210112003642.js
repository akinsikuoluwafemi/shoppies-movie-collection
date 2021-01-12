import React, { useContext, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import "../Pages/Home.css";
import { AllMoviesContext, QueryContext } from "../ContextFile";
import SearchList from "./SearchList";

export default function SearchResults() {
  useEffect(() => {}, []);

  const { allMovies, setAllMovies } = useContext(AllMoviesContext);

  const { query, setQuery } = useContext(QueryContext);

  return (
    <CardWrapper>
      {query && <h4>Results for "{query}"</h4>}

      <SearchList movies={allMovies} />
    </CardWrapper>
  );
}
