/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
/* eslint-enable */

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

exports.onCreateNode = ({ node, getNodes, boundActionCreators }) => {
  // Attach each picture's ImageSharp node by public path if necessary
  if (
    node.internal.type === 'ProgramsYaml' &&
    typeof node.presenter.picture === 'string'
  ) {
    const { createParentChildLink } = boundActionCreators;

    // Find absolute path of linked path
    const pathToFile = path
      .join(__dirname, 'static', node.presenter.picture)
      .split(path.sep)
      .join('/'); // TODO: Use `String.prototype.replaceAll` once available

    // Find ID of File node
    const fileNode = getNodes().find(n => n.absolutePath === pathToFile);

    if (fileNode != null) {
      // Find ImageSharp node corresponding to the File node
      const imageSharpNodeId = fileNode.children.find(n =>
        n.endsWith('>> ImageSharp'),
      );
      const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId);

      // Add ImageSharp node as child
      createParentChildLink({ parent: node, child: imageSharpNode });
    }
  }
};
