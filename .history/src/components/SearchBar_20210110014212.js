import React from 'react'

export default function SearchBar() {
    return (
      <div class="card w-100">
            <div class="card-body">
                <div class="">
                    <label for="movie" class="form-label">Movie Title</label>
                    <input type="search" class="form-control" placeholder="search for anything"/>
                </div>
            </div>
      </div>
    );
}
