
const initialState = {
  value: 0
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return Object.assign({}, state, {
        value: action.value
      })
    default:
      return state
  }
}

export default ui;
