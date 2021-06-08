import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const {
      name,
      flag,
      capital,
      population,
      callingCodes,
      currencies,
      languages,
      region,
      timezones,
    } = obj;
    return (
      <div key={i} className="countries">
        <h2>{name}:</h2>
        <h4>Region: {region}</h4>
        <h4>
          Currencies: {currencies[0].symbol} {currencies[0].name}
        </h4>
        <h4>Languages: {languages[0].name}</h4>
        <h4>Calling Code: +{callingCodes}</h4>
        <h4>Capital: {capital}</h4>
        <h4>Population: {population}</h4>
        <h4>Time Zones: {timezones}</h4>
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
