import gql from 'graphql-tag';

export const EXPLORE_GIGS_QUERY = gql`
    query explore_gigs($filters: Filters, $page: Int){
        explore_gigs(filters: $filters, page: $page){
             items {
                _id
                title
                coverImage
                price
                category
                styles
                fabrics
                delivery
                creator {
                    username
                    profileImage
                   country
                   rating
                }
             }
             total
        }
    }
`



