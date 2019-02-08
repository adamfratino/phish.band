export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_SHOWS_SUCCESS':
      return [
        ...action.data
      ]
    default:
      return state
  }
}
