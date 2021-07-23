import settings from '../config/projectSettings'

export function handleError(e, statusCode) {
  let error: ErrorLog = {
    timeStamp: new Date(Date.now()).toISOString(),
    status: statusCode,
    error: settings.errorTitles[statusCode],
    message: e.message,
  }
  return error
}

interface ErrorLog {
  timeStamp: string
  status: number
  error: string
  message: string
}
