export const convertToSeconds = time => {
  const seconds = time.split(':').reduce((acc,time) => (60 * acc) + +time);
  return seconds
}
