import { defineField, defineType } from "sanity";

export const productInventoryFields = [
  defineType({
    name: "inventory",
    title: "Inventory",
    type: "document",
    fields: [
      defineField({
        name: "quantity",
        title: "Quantity",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      }),
      defineField({
        name: "lowStockThreshold",
        title: "Low Stock Threshold",
        type: "number",
        validation: (Rule) => Rule.min(0),
      }),
    ],
  }),
];