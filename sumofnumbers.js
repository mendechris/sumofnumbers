const numArr = [1, 2, 3, 4, 5];
function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(numArr));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(numArr));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1));
}

console.log(sumRecursion(numArr));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (memo, num) => memo + num);
}
console.log(sumTheSimpleWay(numArr));
