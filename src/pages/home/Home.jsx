import React, { useEffect, useState } from "react";
import SearchSection from "../../components/searchSection/SearchSection";
import Countres from "../../components/country/Countres";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countres = await res.json();
      setIsLoading(false);
      setData(countres);
    };

    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);
  const handleSearch = (userInput) => {
    const searchData = data.filter((country) =>
      country.name.common
        .toLowerCase()
        .startsWith(userInput.toLowerCase().trim())
    );
    console.log(searchData);
    setFilteredCountries(searchData);
  };

  const handleRegion = (chooseRegion) => {
    const searchRegion = data.filter(
      (country) => country.region === chooseRegion
    );
    setFilteredCountries(searchRegion);
  };

  // object.keys.object.value

  return (
    <div>
      <SearchSection
        handleSearch={handleSearch}
        isLoading={isLoading}
        handleRegion={handleRegion}
      />
      <Countres
        countries={filteredCountries.length > 0 ? filteredCountries : data}
        isLoading={isLoading}
      />
      {/* {data ? <Countres countries={data} /> : null}
      {isLoading ? <p>Loading..</p> : null} */}
    </div>
  );
};

export default Home;
