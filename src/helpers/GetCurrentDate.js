export const GetCurrentDate = () => {
  const today = new Date().toJSON().slice(0, 10)
  return today
}
