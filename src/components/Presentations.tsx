import { Flex } from '@rebass/grid';
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

  return (
    <div>
      {data.allPresentationsYaml.edges.map(({ node }: any) => (
        <Flex key={node.id} justifyContent="center">
          <div>
            <Img
              fixed={node.presenter.picture.childImageSharp.fixed}
              imgStyle={{ borderRadius: '50%' }}
            />
          </div>

          <Measure ml={4}>
            <Heading as={GradientBackgroundText} level={3} my={0}>
              {node.title}
            </Heading>

            <Paragraph
              textStyle="caps"
              fontSize={0}
              fontWeight={600}
              color="#357EDD"
            >
              {node.presenter.fullName}, {node.presenter.role},{' '}
              <ExternalLink href={node.presenter.organization.website}>
                {node.presenter.organization.id}
              </ExternalLink>
            </Paragraph>

            <Paragraph>{node.abstract}</Paragraph>
          </Measure>
        </Flex>
      ))}
    </div>
  );
}
