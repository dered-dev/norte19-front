interface ActionPrice {
    closing_price?: string;
    opening_price?: string;
}

/**
 * Calculates the price variation and percentage change between the closing and opening prices.
 *
 * @param {ActionPrice} param0 - An object containing the closing and opening prices as strings.
 * @param {string} param0.closing_price - The closing price of the stock.
 * @param {string} param0.opening_price - The opening price of the stock.
 * @returns {string} - A formatted string representing the price variation and percentage change.
 *                     Returns an empty string if either the closing or opening price is not provided.
 */
export const processActionPrice = ({ closing_price, opening_price }: ActionPrice): string => {
    if (!closing_price || !opening_price) return '';

    const variationPrice = Number(closing_price) - Number(opening_price);
    const variationPercentage = (Number(closing_price) / Number(opening_price) - 1) * 100;

    const formattedVariationPrice = variationPrice > 0
        ? `+${variationPrice.toFixed(2)}`
        : variationPrice.toFixed(2);

    return `${formattedVariationPrice} | ${variationPercentage.toFixed(2)}%`;
};
