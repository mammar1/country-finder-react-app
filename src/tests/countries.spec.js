import React from 'react';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import CountriesTable from '../components/molecules/CountriesTable';
import CountriesListing from '../components/enzymes/Countries-Listing';
import CountriesDetail from '../components/enzymes/Country-Detail';
import Queries from '../queries';
import { prepareCountriesData } from '../utils/utils';

describe('Countries Listing', () => {
  it('It should render countries table', () => {
    const columns = prepareCountriesData();
    const component = shallow(
            <CountriesTable
                columns={columns}
                data={[{
                  code: 'PK', name: 'Pakistan', phone: '92', emoji: '',
                }]}
            />,
    );
    const wrapper = component.find('Table');
    expect(wrapper.length).toBe(1);
  });

  it('It should render countries table', async () => {
    const mocks = [
      {
        request: {
          query: Queries.GET_COUNTRIES_LIST,
        },
        result: {
          data: {
            countries: [{
              code: 'PK', name: 'Pakistan', phone: '92', emoji: '',
            }],
          },
        },
      },
    ];
    const component = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountriesListing />
            </MockedProvider>,
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update();
    const wrapper = component.find('Table');
    expect(wrapper.length).toBe(1);
  });
});
