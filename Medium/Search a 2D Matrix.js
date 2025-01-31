const binarySearch = (arr, low, heigh, target) => {
  while (low <= heigh) {
    const mid = Math.floor((low + heigh) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      heigh = mid - 1;
    }
  }
  return false;
};

const searchMatrix = (matrix, target) => {
  let low = 0;
  let heihg = matrix.length;
  while (low <= heihg) {
    let mid = Math.floor((low + heihg) / 2);
    if (!matrix[mid]) return false;
    if (
      matrix[mid][0] <= target &&
      matrix[mid][matrix[mid].length - 1] >= target
    ) {
      return binarySearch(matrix[mid], 0, matrix[mid].length, target);
    } else if (matrix[mid][0] > target) {
      heihg = mid - 1;
    } else if (matrix[mid][matrix[mid].length - 1] < target) {
      low = mid + 1;
    }
  }
  return false;
};

const matrix = [[1]];

const target = 2;
console.log(searchMatrix(matrix, target));
