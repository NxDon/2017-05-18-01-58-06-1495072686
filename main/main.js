module.exports = function main(str) {
  // Write your cade here
  var strarr = str.split("");
  var sum = 0;
  for(var i in strarr){
  	sum += parseInt(strarr[i]);
  }
  return sum;
};
