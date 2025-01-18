export default {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "price",
      type: "number",
      title: "Product Price",
    },
    {
      name: "discountedPrice",
      type: "number",
      title: "Price with Discount",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "Rating of the product",
    },
    {
      name: "reviews",
      type: "number",
      title: "Reviews",
      description: "Reviews of the product",
    },
    {
      name: "stockQuantity",
      type: "number",
      title: "Stock",
      description: "Quantity of the product",
    },
    {
      name: "featured",
      type: "boolean",
      title: "is Featured?",
    },

    {
      name: "colors",
      type: "array",
      title: "Colors",
      of: [{ type: "string" }],
      options: {
        layout: "colors",
      },
    },

    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add sizes like S , M , L , XL , XXL",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image 1",
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    },
    {
      name: "sec_image",
      type: "image",
      title: "Product Image 2",
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    },
  ],
};
