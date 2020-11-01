const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = [];
    if (!Array.isArray(members)) {
      return false;
    } else {
      members.forEach(elem => {typeof(elem) === "string" ? team.push(elem.trim().toUpperCase()[0]) : false})
    }
  return team.sort().join('');
};
