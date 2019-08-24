import gql from 'graphql-tag';

const ALL_PORTFOLIO_ITEMS_QUERY = gql`
  query portfolioItems {
    portfolioItems(where: { status: PUBLISHED }) {
      id
      title
      description
      projectImage {
        id
        url
      }
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
      carouselImages {
        id
        url
      }
      techSheet
      links
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
      publishedDate
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
      publishedDate
    }
  }
`;

const ALL_SPECIALITIES_QUERY = gql`
  query specialities {
    specialities(where: { status: PUBLISHED }) {
      id
      iconPath
      title
      description
      icon {
        id
        url
      }
    }
  }
`;

const ALL_TECHNOLOGIES_QUERY = gql`
  query technologies {
    technologies(where: { status: PUBLISHED }) {
      id
      icon {
        id
        url
      }
      color
      title
      description
    }
  }
`;

export {
  ALL_PORTFOLIO_ITEMS_QUERY,
  PORTFOLIO_ITEM,
  ALL_BLOGS_QUERY,
  BLOG_POST,
  ALL_SPECIALITIES_QUERY,
  ALL_TECHNOLOGIES_QUERY,
};
