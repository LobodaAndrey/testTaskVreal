/*eslint-disable */
export const logger = store => next => action => {
  console.log(
    `Тип события: ${action.type}, дополнительные данные события: ${
      action.payload
    }`
  )
  return next(action)
}
/*eslint-enable */