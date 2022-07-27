const ftoc = function(Ftemp) {
  return Math.round(((Ftemp - 32) * (5/9)*10)) / 10;
};

const ctof = function(Ctemp) {
  return Math.round(((Ctemp * (9/5)) + 32)*10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
