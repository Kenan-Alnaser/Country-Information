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
      <div key={i}>
        <h2>{name}</h2>
        <h5>Region: {region}</h5>
        <h5>
          Currencies: {currencies[0].symbol} {currencies[0].name}
        </h5>
        <h5>Languages: {languages[0].name}</h5>
        <h5>Calling Code: +{callingCodes}</h5>
        <h5>Capital: {capital}</h5>
        <h5>Population: {population}</h5>
        <h5>Time Zones: {timezones}</h5>
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
