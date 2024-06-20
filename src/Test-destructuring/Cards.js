import React from 'react'
import "../Test-destructuring/Netflix.css"

function Cards({ item }) {
  // const {name,rating,description,id,genre,watch_url} = item;

  return (
    <li className="card" key={item.id}>
      <div>
        <img src={item.img_url} alt="" width="40%" height="40%" />
      </div>
      <div className='card-content'>
        <h2>Name: {item.name}</h2>
        <h3>Rating: {item.rating}</h3>
        <p>Summary: {item.description}</p>
        <p>Genre: {item.genre}</p>
        <p>cast: {item.cast}</p>
        <a href={item.watch_url} target='blank'>
          <button style={{
            padding: "1.2rem 2.4rem",
            border: "none",
            fontSize: "1.6rem",
            backgroundColor: "var(--bnt-hover-bg-color)",
            color: "var(--bg-color)",
          }}>Watch now</button>
        </a>
      </div>
    </li>

  )
}

export default Cards