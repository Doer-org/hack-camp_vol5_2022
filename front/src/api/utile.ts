export const defaultArg = (value: string | undefined, defaultValue: string): string => {
  if (typeof value === 'string') {
    return value
  } else {
    return defaultValue
  }
}