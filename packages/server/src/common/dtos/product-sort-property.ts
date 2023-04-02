import { Product } from '@kassatka/core'
import { getSortableClassProps } from '@kassatka/core'

const OProductSortProperty = {
  ...getSortableClassProps(Product.prototype),
} as const

export type ProductSortProperty = (typeof OProductSortProperty)[number]
