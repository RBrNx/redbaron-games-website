import gql from 'graphql-tag';

const ALL_PORTFOLIO_ITEMS_QUERY = gql`
  query portfolioItems {
    portfolioItems(where: { visible: true, status: PUBLISHED }) {
      id
      title
      description
      displayImage
    }
  }
`;

const PORTFOLIO_ITEM = gql`
  query portfolioItems($id: ID) {
    portfolioItem(where: { id: $id }) {
      id
      title
      description
      aboutProject
      carouselImages
      techSheet
      links
      visible
      displayImage
    }
  }
`;

export { ALL_PORTFOLIO_ITEMS_QUERY, PORTFOLIO_ITEM };
