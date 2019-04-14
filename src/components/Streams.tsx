import { Box, Flex } from '@rebass/grid';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import EmbeddedVideo from './EmbeddedVideo';

export default function Streams() {
  const data = useStaticQuery(graphql`
    {
      allStreamsYaml {
        edges {
          node {
            id
            src
            title
          }
        }
      }
    }
  `);

  return (
    <Flex flexDirection={['column', null, 'row']}>
      {data.allStreamsYaml.edges.map(({ node }: any) => (
        <Box flex={1} m={3}>
          <EmbeddedVideo key={node.id} src={node.src} title={node.title} />
        </Box>
      ))}
    </Flex>
  );
}
