import { Box, Flex } from '@rebass/grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import ExternalLink from './ExternalLink';
import GradientBackgroundText from './GradientBackgroundText';
import Heading from './Heading';
import Measure from './Measure';
import Paragraph from './Paragraph';

export default function Presentations() {
  const data = useStaticQuery(graphql`
    {
      allPresentationsYaml {
        edges {
          node {
            id
            title
            abstract
            presenter {
              fullName
              picture {
                childImageSharp {
                  fixed(width: 192, height: 192) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              organization {
                id
                website
              }
              role
            }
          }
        }
      }
    }
  `);

  return data.allPresentationsYaml.edges.map(({ node }: any) => (
    <Flex
      key={node.id}
      flexDirection={['column', 'column', 'row']}
      alignItems={['center', 'center', 'flex-start']}
      justifyContent="center"
      mb={4}
    >
      <Box mb={3}>
        <Img
          fixed={node.presenter.picture.childImageSharp.fixed}
          imgStyle={{ borderRadius: '50%' }}
        />
      </Box>

      <Measure ml={[0, 0, 4, 5]}>
        <Heading as={GradientBackgroundText} level={3} my={0}>
          {node.title}
        </Heading>

        <Paragraph textStyle="caps" color="blue">
          {node.presenter.fullName} – {node.presenter.role},{' '}
          <ExternalLink href={node.presenter.organization.website}>
            {node.presenter.organization.id}
          </ExternalLink>
        </Paragraph>

        <Paragraph>{node.abstract}</Paragraph>
      </Measure>
    </Flex>
  ));
}
