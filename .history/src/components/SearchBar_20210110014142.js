import React from 'react'

export default function SearchBar() {
    return (
      <div class="card w-100">
            <div class="card-body">
                <div class="mb-3">
                    <label for="movie" class="form-label">Movie Title</label>
                    <input type="search" class="form-control" placeholder="type your search"/>
                </div>
            </div>
      </div>
    );
}
