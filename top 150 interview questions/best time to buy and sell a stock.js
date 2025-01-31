// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (minPrice > price) {
      minPrice = price;
    } else if (price - minPrice > maxPrice) {
      maxPrice = price - minPrice;
    }
  }

  return maxPrice;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
