import React from "react";
import NominationItem from "./NominationItem";

export default function NominationList({ nominations }) {

  const renderedNominations = nominations.map((movie) => {
    return <NominationItem key={movie.imdbID} movie={movie} />;
  });

  return <div>{renderedNominations}</div>;
}
