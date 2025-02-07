import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference", // Change type to reference
      to: [{ type: "category" }], // Reference to the 'category' schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discountPercent",
      title: "Discount Percent",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "stock",
      title: "Product Stock",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: "bestSelling",
      type: "boolean",
      title: "Best Selling",
      initialValue: false,
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.unique(),
    }),
  ],
});