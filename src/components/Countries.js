import React, { Suspense } from "react";
import { useSelector } from "react-redux";
const Country = React.lazy(() => import('./Country'))

const Countries = () => {
  
  const filteredCountry = useSelector(state => state.country.filteredCountry)
  return (
    <div className="countries">
      <div className="container">
        {filteredCountry &&
          filteredCountry.map((country, index) => {
            return (
              <Suspense key={index} fallback={<></>}>
                <Country country={country} />
              </Suspense>
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
