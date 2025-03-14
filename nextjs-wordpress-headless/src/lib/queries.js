import { gql } from '@apollo/client';

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    nodeByUri(uri: $slug) {
      __typename
      ... on Post {
        title
        content
        date
      }
      ... on Page {
        title
        content
        date
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      edges {
        node {
          id
          slug
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
              srcSet
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_MENU = gql`
  query GetMenu {
    menuItems(where: {location: PRIMARY}) {
      nodes {
        key: id
        parentId
        title: label
        url
      }
    }
  }
`;
