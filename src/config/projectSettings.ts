export const settings = {
  jwtExpirationTime: '2 days',
  useServerPasswordPolicy: true,
  passwordLabel: 'Password',
  passwordPolicy: {
    min: 8,
    max: 26,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  },
  errorTitles: {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    412: 'Precondition Failed',
    500: 'Internal Server Error',
    503: 'Service Unavailable',
  },
}

export default settings
