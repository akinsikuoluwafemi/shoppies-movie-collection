import React from 'react'

export default function Banner() {
    return (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>5 nominations</strong> You should check in on some of those
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
}
