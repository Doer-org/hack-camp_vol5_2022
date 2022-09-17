export const defaultArg = <T>(value: T | undefined, defaultValue: T): T => {
  if (typeof value === 'undefined') {
    return defaultValue
  } else {
    return value
  }
}