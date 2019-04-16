const path = require('path');

// Generate venue status pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allPresentationsYaml {
        edges {
          node {
            venue
          }
        }
      }
    }
  `).then(result => {
    result.data.allPresentationsYaml.edges.forEach(({ node }) => {
      createPage({
        path: `/venues/${node.venue.toLowerCase()}`,
        component: path.resolve('./src/templates/venue-status.tsx'),
        context: {
          venue: node.venue,
        },
      });
    });
  });
};
