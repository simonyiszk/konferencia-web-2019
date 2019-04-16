const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allProgramsYaml {
        edges {
          node {
            venue
          }
        }
      }
    }
  `);

  // Generate venue status pages
  data.allProgramsYaml.edges.forEach(({ node }) => {
    createPage({
      path: `/venues/${node.venue.toLowerCase()}`,
      component: path.resolve('./src/templates/venue-status.tsx'),
      context: {
        venue: node.venue,
      },
    });
  });
};
