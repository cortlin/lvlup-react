import { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ab6a57131f70718c2e7f83b8ee465851&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=ab6a57131f70718c2e7f83b8ee465851'


export const MoviesList = () => { 
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const getMovies = async () => {
    try {
      const result = await fetch(API_URL);
      const json = await result.json();
      setMovies(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  const getConfig = async () => {
    try {
      const result = await fetch(CONFIG_URL);
      const json = await result.json();
      setConfig(json);
    } catch (e) {
      console.error(e);
    }
  }

  //sense the array is empty, useEffect is only called on inital render
  useEffect(() => {
    getConfig();
    getMovies();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />

      <ul className="movies-list">
        { movies.filter((movie) => {
          return movie.title.toLowerCase().includes(filter.toLowerCase())
        }).map((movie) => (
          <Movie key={movie.id} movie={movie} config={config} />
        ))}
      </ul>
    </div>
  )
}