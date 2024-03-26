import {
  gql,
} from '@apollo/client';

export default {
  GET_COUNTRIES_LIST: gql`{
            countries {
                code,
                name,
                phone,
                emoji
            }
        }`,
  GET_COUNTRY_DETAIL: gql`
           query COUNTRY($code: ID!) {
                country(code: $code) {
                    name,
                    native,
                    continent {
                        name
                    },
                    currency,
                    languages {
                        name,
                        native
                    }
                    capital,
                    states {
                        name
                    }
                }
            }`,
};
