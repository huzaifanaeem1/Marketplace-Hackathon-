import { writeClient } from "@/sanity/lib/writeClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    description,
    price,
    stock,
    discountPercent,
    bestSelling,
    colors,
    sizes,
    category,
    image,
  } = body;
  console.log(image);

  // if (image){

  // }
  // Create a new product in Sanity
  const product = await writeClient.create({
    _type: "product",
    name,
    description,
    price,
    stock,
    discountPercent,
    bestSelling,
    colors,
    sizes,
    category: { _type: "reference", _ref: category },
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: image.asset._ref,
      },
    },
  });

  return NextResponse.json(product);
}