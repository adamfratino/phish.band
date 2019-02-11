export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_SHOW_SUCCESS':
      return [
        ...action.data
      ]
    default:
      return state
  }
}
