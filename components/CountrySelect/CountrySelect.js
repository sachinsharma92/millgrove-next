import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./CountrySelect.module.scss";
import { DownArrow } from "../../public/icons/icons";
import { allCountries } from "../../utils/countries";

const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const [myCountries, setMyCountries] = useState(allCountries);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchCountry, setSearchCountry] = useState("India +91");
  const inputRef = useRef();

  const searchCountries = (searchInput) => {
    const filteredList = allCountries.filter((country) => {
      return searchInput
        ? country.name.toLowerCase().startsWith(searchInput.toLowerCase())
        : true;
    });
    setMyCountries(filteredList);
  };

  return (
    <>
      <div
        className={styles.countrySelectWrapper}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <label>
          {selectedCountry && (
            <img
              className={styles.selectedCountryFlag}
              alt={selectedCountry.name}
              height="20"
              width="20"
              src={`http://purecatamphetamine.github.io/country-flag-icons/1x1/${selectedCountry.code}.svg`}
            />
          )}
          <input
            ref={inputRef}
            onClick={() => {
              setSearchCountry("");
              setMyCountries(allCountries);
            }}
            value={searchCountry}
            onChange={(e) => {
              setSearchCountry(e.target.value);
              searchCountries(e.target.value);
            }}
            className={styles.hiddenInput}
          />
        </label>
        <span className={styles.dialCode}>+{selectedCountry.dial_code}</span>
        <span className={`${styles.downArrow} ${showDropdown && styles.up}`}>
          <DownArrow />
        </span>
        {showDropdown && (
          <ul className={styles.listWrapper}>
            {myCountries.map((country) => (
              <li
                key={country.code}
                className={styles.listChild}
                onClick={() => {
                  setSearchCountry(`${country.name} ${country.dial_code}`);
                  setSelectedCountry({
                    name: country.name,
                    dial_code: country.dial_code,
                    code: country.code,
                  });
                }}
              >
                <Image
                  alt={country.name}
                  height="16"
                  width="16"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/1x1/${country.code}.svg`}
                  className={styles.flagImg}
                />
                {country.name} +{country.dial_code}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CountrySelect;
