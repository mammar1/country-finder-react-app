import React, { useState, useEffect } from 'react';
import CountriesListing from '../enzymes/Countries-Listing';
import CountriesDetail from '../enzymes/Country-Detail';

function Countries() {
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const handleOnClickCountyrRow = (id) => {
    setSelectedCountryId(id);
  };
  return (
        <React.Fragment>
            <CountriesListing handleOnClickCountyrRow={handleOnClickCountyrRow} />
            { selectedCountryId ? <CountriesDetail
                countryCode={selectedCountryId} /> : null }
        </React.Fragment>
  );
}

export default Countries;
