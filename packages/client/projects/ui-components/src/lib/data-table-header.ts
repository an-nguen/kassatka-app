export interface DataTableHeader<T> {
  // Column name
  columnName: string
  // Property name
  propertyName: string
  // Sort function
  sort: (a: T, b: T) => boolean
}
