import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CountryDetail.css";
import Loading from "../../utils/Loading";


const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getAcountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );

      const result = await response.json();
      console.log(result[0].on);
      console.log(result[0].name.common);
      setCountry(result[0]);
      setIsLoading(false);
    };
    setTimeout(() => {
      getAcountry();
    }, 3000);
  }, []);
  if (isLoading) {
    return <Loading isLoading={isLoading}/>
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const currencies = country.currencies ? Object.values(country.currencies)[0].name : "No currency";
  const languages = object.vlaues (country.languages).map((language)=> {
    return language
  })

  .join(", ")

  return (
    <div className="country-detail">
      <div className="container text-start py-5">
        <button
          onClick={handleGoBack}
          className="px-4 py-2 border-0 mb-5 rounded-2 bg-elements custom-text-white"
        >
          <FaArrowLeftLong/>
          Back
        </button>
        <div className="d-flex flex-column gap-5 flex-md-row">
          <img
            src={country.flags.png}
            alt={country.flags.png}
            className="detail-flag"
          />
          <div className="d-flex flex-column gap-4">
            <div className="inner-main d-md-flex align-items-center gap-5">
              <div>
                <p className="fw-bold fs-1">{country.name.common}</p>
                <p>
                  <span className="fw-semi-bold">Native Name:</span>{" "}
                  {country.population}
                </p>
                <p>
                  <span className="fw-semi-bold">Population :</span>{" "}
                  {Object.values(country.name.nativeName)[0].common}
                </p>
                <p>
                  <span className="fw-semi-bold">Region :</span>{" "}
                  {country.region}
                  {country.population}
                </p>
                <p>
                <span className="fw-semi-bold ">Sub Region:</span>{" "}
                {country.subregion}
                </p>
                <p>
                  <span className="fw-semi-bold">Capital :</span>{" "}
                  {country.capital ? country.capital : "No Capital"}
                </p>
              </div>
              <div className="other-side">
               <p>
                <span className="fw-semi-bold">Top Level Domain:</span>{" "}
                {country.tld[0]}
               </p>
               <p>
                <span className="fw-semi-bold">Currencies:</span> {currencies}
               </p>
               <p>
                <span className="fw-semi-bold">Languages:</span> {languages}
               </p>
              </div>
            </div>
            <div className="border-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
