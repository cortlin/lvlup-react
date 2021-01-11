import PropTypes from 'prop-types';

export const Movie = ({ movie, config }) => {

    return ( <li>
        {config.images?.base_url && (
            <img src={config.images.base_url +'w342' + movie.poster_path} alt="Movie Poster"/>
        )}
        <h3>{movie.title}</h3>
         </li> )
}
Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string.isRequired
    }).isRequired
}