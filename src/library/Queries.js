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
  query blogs($where: BlogWhereInput) {
    blogs(where: $where) {
      id
      title
      description
      blogImage {
        id
        url
      }
      blogType
      categories {
        id
        name
      }
    }
    categories {
      id
      name
    }
  }
`;

const BLOG_POST = gql`
  query blogs($id: ID) {
    blog(where: { id: $id }) {
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

export {
  ALL_PORTFOLIO_ITEMS_QUERY,
  PORTFOLIO_ITEM,
  ALL_BLOGS_QUERY,
  BLOG_POST,
};
