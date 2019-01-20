const axios = require('axios');

const getExchangeRate = async (from, to) => {
  try {
  const response = await axios.get(`http://data.fixer.io/api/latest?access_key=cb31f24104161bd4ffb5ee74f08db8f6`);
    // const rate = response.data.rates[to];
    // if (rate) {
    //   return rate;
    // } else {
    //   throw new Error();
    // }
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];

    if (isNaN(rate)) {
      throw new Error();
    }

    return rate;
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
  }
};

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
      return response.data.map((country) => country.name);
  } catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode}.`);
  }
};

// OLD way of using promises
// const convertCurrency = (from, to, amount) => {
//   let countries;
//   return getCountries(to).then((tempCountries) => {
//     countries = tempCountries;
//     return getExchangeRate(from, to);
//   }).then((rate) => {
//     const exchangedAmount = amount * rate;
//
//     return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
//   });
// };

// Better async await way
const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const convertedAmount = (amount * rate).toFixed(2);
   // let exchangedAmount = amount * rate;
   return `${amount} ${from} is worth ${convertedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
 };

convertCurrency('USD', 'EUR', 100).then((message) => {
  console.log(message);
}).catch((e) => {
  console.log(e.message);
});
