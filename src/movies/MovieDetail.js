import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {

  const [movie, setMovie] = useState({});
  const params = useParams();

  const BASE_URL = `https://api.themoviedb.org/3/movie/${params.id}`
  const API_KEY = `?api_key=ab6a57131f70718c2e7f83b8ee465851`;
  const IMAGE_URL = `https://image.tmdb.org/t/p/original/`;

  const getMovie = async () => {
    try {
      const result = await fetch(BASE_URL + API_KEY);
      const json = await result.json();
      setMovie(json);
      console.log(json)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getMovie();
  }, [params.id]);

  if (!movie.title) return ( <h3>Loading...</h3> )

  return (
    <div>
      <h2>{movie.title} </h2>
      <p>{movie.overview}</p>
      <img
        class="movie-image"
        src={IMAGE_URL + movie.backdrop_path}
        alt={movie.title +` poster`}
      />
      <h3>Genres</h3>
      <ul>
        {movie.genres.map((genre) => {
          return <li key={genre.id}>{genre.name}</li>
        })}
      </ul>
    </div>
  )

}