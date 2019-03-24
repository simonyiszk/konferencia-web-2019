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
    <Flex key={node.id} flexWrap="wrap" justifyContent="center" mb={4} ml={-5}>
      <Box mb={3} pl={5}>
        <Img
          fixed={node.presenter.picture.childImageSharp.fixed}
          imgStyle={{ borderRadius: '50%' }}
        />
      </Box>

      <Measure flex="1 30em" pl={5}>
        <GradientBackgroundText as={Heading} level={3} my={0}>
          {node.title}
        </GradientBackgroundText>

        <Paragraph textStyle="caps" color="blue">
          {node.presenter.fullName} –{' '}
          {node.presenter.role && `${node.presenter.role}`}
          {node.presenter.organization && (
            <>
              {node.presenter.role && ', '}
              <ExternalLink href={node.presenter.organization.website}>
                {node.presenter.organization.id}
              </ExternalLink>
            </>
          )}
        </Paragraph>

        <Paragraph mt={0}>{node.abstract}</Paragraph>
      </Measure>
    </Flex>
  ));
}
