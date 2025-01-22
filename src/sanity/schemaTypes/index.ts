import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import product from './product'
import { customer } from './customer'
import { order } from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, customer, order ],
}
