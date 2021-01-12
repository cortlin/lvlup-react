import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Movie = ({ movie, config }) => {

  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        {config.images?.base_url && (
          <img src={config.images.base_url + 'w342' + movie.poster_path} alt="Movie Poster" />
        )}
        <h3>{movie.title}</h3>
      </Link>
    </li>)
}
Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string.isRequired
  }).isRequired
}