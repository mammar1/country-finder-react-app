import React, { useState, useEffect } from 'react';
import {
  useQuery,
} from '@apollo/client';
import CountryQueries from '../../queries';
import CountryDetail from '../molecules/CountryDetailGrid';

function CountriesDetail({ countryCode }) {
  const { data, loading, error } = useQuery(CountryQueries.GET_COUNTRY_DETAIL, {
    variables: { code: countryCode },
  });

  if (loading) return <div>Loading Details</div>;
  if (error) return `Error! ${error}`;

  if (data) {
    return (
            <React.Fragment>
                <CountryDetail countryDetail={data.country} />
            </React.Fragment>
    );
  }
}

export default CountriesDetail;
