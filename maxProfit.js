var maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0]
    for (const price of prices) {
        minPrice = Math.min(minPrice, price)
        const profit = price - minPrice
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
}

const lst = [7, 6, 4, 3, 1]
console.log(maxProfit(lst))