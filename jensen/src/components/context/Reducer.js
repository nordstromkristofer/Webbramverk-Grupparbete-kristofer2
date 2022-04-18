export default (state, action) => {
  switch(action.type) {
    case 'GET_SKOLOR':
      return {
        ...state,
        skolor: action.payload
      }
    case 'DELETE_SKOLA':
      return {
        ...state,
        skolor: state.skolor.filter(skola => skola._id !== action.payload)
      }
    case 'ADD_skola':
      return {
        ...state,
        skolor: [...state.skolor, action.payload]
      }
    case 'SKOLA_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}