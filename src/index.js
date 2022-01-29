module.exports = function towelSort (matrix) {
  const result = new Array();
  if (matrix) {
    matrix.forEach((arr, ind) => {
      if (ind % 2) result.push(...arr.reverse());
      else result.push(...arr);
    });
  }

  return result;
}
