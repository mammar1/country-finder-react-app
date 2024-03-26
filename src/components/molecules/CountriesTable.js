import React from 'react';
import Table from '../atoms/table';
import Row from '../atoms/table-row';
import Column from '../atoms/table-coulmn';

function CountriesTable({ columns, data, handleOnClick }) {
  return (
        <React.Fragment>

            <Table>
                <Row>
                    {
                        columns.map((col) => <Column>{col.header}</Column>)
                    }
                </Row>

                {
                    data.map((country) => <Row key={country.code}>
                            {
                                columns
                                  .map((col, idx) => <Column
                                        id={country.code}
                                        handleOnClick={handleOnClick}>
                                    { country[col.accessor] }
                                </Column>)
                            }
                        </Row>)
                }

            </Table>
        </React.Fragment>
  );
}

export default CountriesTable;
