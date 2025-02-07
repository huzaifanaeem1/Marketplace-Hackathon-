export const category = {
  name: "category",
  type: "document",
  title: "Categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description", 
    },
    {
      name: "productsCount",
      type: "number",
      title: "No of Products",
    },
    {
      name: "parentCategory",
      type: "string",
      title: "Parent Category",
    },

    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },

    {
      name: "image",
      type: "image",
      title: "Category Image",
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    },
  ],
};