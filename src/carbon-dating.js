const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((Number(sampleActivity) <= 0) || (isNaN(parseInt(sampleActivity))) ||(typeof (sampleActivity) !== "string")) return false;
  let res = Math.ceil((HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/sampleActivity))/0.693);
  return (res >= 0)?res:false;
};
