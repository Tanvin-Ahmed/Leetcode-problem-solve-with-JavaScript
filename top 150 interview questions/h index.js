// https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} citations
 * @return {number}
 */

const hIndex = (citations) => {
  const n = citations.length;

  citations.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let hI = 0;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const h = n - mid;

    if (citations[mid] >= h) {
      hI = h;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return hI;
};

console.log(hIndex([3, 0, 6, 1, 5]));
