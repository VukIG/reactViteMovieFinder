import React from 'react'

const Movie = ({movie: { imdbID, Year, Poster, Title, Type }}) => {
  return (
    <div className='Movie' key={imdbID}>
        <div>
            <p>{Year}</p>
            <div>
                <img src={Poster !== 'N/A' ? Poster:"https://via.placeholder.com/400"} alt={Title} />
            </div>
        </div>
        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
    </div>
    
  )
}

export default Movie