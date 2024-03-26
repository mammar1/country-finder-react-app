import React, { useState, useEffect } from 'react';
import {
  useQuery,
} from '@apollo/client';
import Search from '../molecules/SearchCountry';
import CountriesTable from '../molecules/CountriesTable';
import CountriesDetail from './Country-Detail';
import CountryQueries from '../../queries';
import { prepareCountriesData } from '../../utils/utils';

function CountriesListing({ handleOnClickCountyrRow }) {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);

  const handleCountriesSearch = (e) => {
    setSearchText(
      e.target.value,
    );
  };

  const handleColumnClick = (e) => {
    handleOnClickCountyrRow(e.target.id);
  };

  const { data, loading, error } = useQuery(CountryQueries.GET_COUNTRIES_LIST);
  useEffect(() => {
    if (data) setCountries(data.countries);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error... {error}</div>;

  if (data) {
    const columns = prepareCountriesData();
    return (
            <React.Fragment>
                <Search handleSearch={handleCountriesSearch}/>
                <CountriesTable handleOnClick={handleColumnClick} columns={columns} data = {
                    searchText ? countries.filter((c) => new RegExp(searchText, 'ig').test(c.name)) : countries
                } />
            </React.Fragment>
    );
  }
}

export default CountriesListing;
