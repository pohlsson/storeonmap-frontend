import { connect } from 'react-redux'
import { search } from '../actions/api.js'
import SearchFieldComponent from '../components/searchFieldComponent'
 
const mapStateToProps = (state, ownProps) => ({
})
 
const mapDispatchToProps = (dispatch, ownProps) => ({
  search: (searchString) => dispatch(search(searchString))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFieldComponent)
