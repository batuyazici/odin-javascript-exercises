const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    return currentAge > oldestAge ? currentPerson : oldest;
  });
};

function getAge(yearOfBirth, yearOfDeath = null) {
  if (yearOfDeath !== null) {
    calculatedAge = yearOfDeath - yearOfBirth;
  } else {
    calculatedAge = new Date().getFullYear() - yearOfBirth;
  }
  return calculatedAge;
}
// Do not edit below this line
module.exports = findTheOldest;
