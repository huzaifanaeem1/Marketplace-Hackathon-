import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import { customer } from './customer'
import { order } from './order'
import { category } from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, customer, order ],
}
