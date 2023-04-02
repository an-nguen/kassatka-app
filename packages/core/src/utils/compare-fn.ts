const isString = (v: unknown): boolean => typeof v === 'string'

const isObject = (v: unknown): boolean => typeof v === 'object'

const isNumber = (v: unknown): boolean => typeof v === 'number'

export function getCompareFn<T extends object>(
  propertyName: string
): (a: T, b: T) => number {
  return (a, b): number => {
    const aVal = (a as Record<string, unknown>)[propertyName]
    const bVal = (b as Record<string, unknown>)[propertyName]
    if (isString(aVal) && isString(bVal)) {
      const aStr = aVal as string
      const bStr = bVal as string
      return aStr.localeCompare(bStr)
    } else if (isObject(aVal) || isObject(bVal)) {
      throw new Error('object types cannot be compared')
    } else if (isNumber(aVal) && isNumber(bVal)) {
      return (aVal as number) - (bVal as number)
    }
    return 0
  }
}
