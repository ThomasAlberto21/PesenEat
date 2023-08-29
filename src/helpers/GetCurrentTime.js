export const GetCurrentTime = () => {
  const today = new Date()
  let hour = today.getHours()
  hour = ('0' + hour).slice(-2)

  let minute = today.getMinutes()
  minute = ('0' + minute).slice(-2)

  let second = today.getSeconds()
  second = ('0' + second).slice(-2)

  return hour + ':' + minute + ':' + second
}
