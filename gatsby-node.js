const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allPresentationsYaml {
        edges {
          node {
            venue
          }
        }
      }
    }
  `);

  // Generate venue status pages
  data.allPresentationsYaml.edges.forEach(({ node }) => {
    createPage({
      path: `/venues/${node.venue.toLowerCase()}`,
      component: path.resolve('./src/templates/venue-status.tsx'),
      context: {
        venue: node.venue,
      },
    });
  });
};
