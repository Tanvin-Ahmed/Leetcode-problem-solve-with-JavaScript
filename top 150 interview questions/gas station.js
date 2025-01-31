// https://leetcode.com/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

const canCompleteCircuit = (gas, cost) => {
  const n = gas.length;
  gas = gas.concat(gas);
  cost = cost.concat(cost);

  let current = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    if (i === start + n) return start;

    current += gas[i] - cost[i];

    if (current < 0) {
      start = i + 1;
      current = 0;
    }
  }

  return -1;
};

const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
