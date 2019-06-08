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

const ALL_BLOGS_QUERY = gql`
  query blogs {
    blogs(where: { status: PUBLISHED }) {
      status
      updatedAt
      createdAt
      id
      title
      description
      blogImage {
        id
        url
      }
      blog
      blogType
      categories
    }
  }
`;

export { ALL_PORTFOLIO_ITEMS_QUERY, PORTFOLIO_ITEM, ALL_BLOGS_QUERY };
