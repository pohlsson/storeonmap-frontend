import React from 'react'
import PropTypes from 'prop-types'
 
const SearchFieldComponent = (props) => {
  const {search} = props;
  return (
    <form onSubmit={() => search(document.getElementById("searchInput").value)}>
      <input id="searchInput"/>
      <button type="submit">
        Search
      </button>
    </form>
  )
}


SearchFieldComponent.propTypes = {
  search: PropTypes.func.isRequired,
}
 
export default SearchFieldComponent
