const _ = require("lodash");

const compareValues = (key, order = "asc") => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
};

const getData = (type, data) => {
  const result = {};
  const dataSortByType = data.sort(compareValues(type, "desc"));
  const dataGroupByCountryName = _.groupBy(dataSortByType, "countryName");
  for (let key in dataGroupByCountryName) {
    result[key] = dataGroupByCountryName[key].sort(compareValues("sk", "desc"));
  }
  return result;
};

export { getData };
