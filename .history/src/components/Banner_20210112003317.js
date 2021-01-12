import React from 'react'

export default function Banner() {
    return (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>5 nominations</strong> You have successfully nominated 5 movies, thanks for your input, <strong>YOU CAN NO LONGER NOMINATE A MOVIE</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
}
