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
}

export default settings
