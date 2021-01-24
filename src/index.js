
exports.min = function min(array) {
  return arguments.length != 0 && array.length != 0 && Array.isArray(array) ? array.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max(array) {
  return arguments.length != 0 && array.length != 0 && Array.isArray(array) ? array.sort((a, b) => a - b)[array.length - 1] : 0;
}

exports.avg = function avg(array) {
  return arguments.length != 0 && array.length != 0 && Array.isArray(array) ? (array.sort((a,b) => a - b).reduce((a,b) => a + b))/array.length : 0;
}
