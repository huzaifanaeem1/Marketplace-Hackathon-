export const discountedPrice = (price: number, discountPercent: number) =>
    price - (discountPercent / 100) * price;