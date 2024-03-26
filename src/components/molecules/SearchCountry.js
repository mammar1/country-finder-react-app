import React from 'react';
import { Debounce } from 'react-throttle';
import Input from '../atoms/input';

function search({ handleSearch }) {
  return (
        <Debounce time="200" handler="onChange">
            <Input placeholder={'Search Country'} handleOnChange={handleSearch} />
        </Debounce>
  );
}

export default search;
