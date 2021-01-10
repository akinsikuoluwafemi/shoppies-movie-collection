import React from 'react'

export default function CardWrapper({children}) {
    return (
      <div className="card w-100">
            <div className="card-body">{ children}</div>
      </div>
    );
}
