export type Price = number;

export function isValidPrice(price: number): price is Price
{
    return !isNaN(price) && isFinite(price) && price >= 0;
}

export function priceToHumanString(price: Price): string
{
    return `${price} zł`;
}