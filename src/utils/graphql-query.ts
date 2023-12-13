export const getAllPagesQuery = `query q {
  pages {
    edges {
      node {
        id
        blocks(postTemplate: false)
        slug
        uri
        title
      }
    }
  }
}`;
