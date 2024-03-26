import React from 'react';
import Grid from '../atoms/grid';
import GridItem from '../atoms/grid-item';

function GridDetail({ countryDetail }) {
  return (
        <Grid>
            <GridItem>
                <div>Name: {countryDetail.name} </div>
            </GridItem>
            <GridItem>
                <div>Native-Language: {countryDetail.native} </div>
            </GridItem>
            <GridItem>
                <div>Languages: {(() => countryDetail.languages.map((l) => `${l.native}, `))()}</div>
            </GridItem>
            <GridItem>
                <div>Continent: {countryDetail.continent.name} </div>
            </GridItem>
            <GridItem>
                <div>Capital: {countryDetail.capital} </div>
            </GridItem>
        </Grid>
  );
}

export default GridDetail;
