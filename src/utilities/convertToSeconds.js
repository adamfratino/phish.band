export const convertToSeconds = time => {
  const [min, seconds] = time.split(':').map(n => +n)
  return min * 60 + seconds
}
