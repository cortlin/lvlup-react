import PropTypes from 'prop-types';

export const Filter = ({filter, setFilter}) => {
  return (
    <label htmlFor="">
      FILTER:
      <input
        onChange={(e) => {
          setFilter(e.target.value)
        }}
        value={filter}
        type="text" />
    </label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}