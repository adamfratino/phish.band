export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ALBUMS_SUCCESS':
      return [
        ...action.data
      ]
    default:
      return state
  }
}
