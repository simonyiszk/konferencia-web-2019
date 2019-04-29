import { Flex } from '@rebass/grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Heading from './Heading';
import Link from './Link';
import Paragraph from './Paragraph';
import Text from './Text';

export default function Contacts() {
  const data = useStaticQuery(graphql`
    {
      allContactsYaml {
        edges {
          node {
            id
            fullName
            role
            email
            picture {
              childImageSharp {
                fixed(width: 256, height: 256) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            frameColor
          }
        }
      }
    }
  `);

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap">
      {data.allContactsYaml.edges.map(({ node }: any) => (
        <Text
          as="address"
          key={node.id}
          textAlign="center"
          fontStyle="normal"
          px={4}
          mb={3}
        >
          <Img
            fixed={node.picture.childImageSharp.fixed}
            style={{
              borderWidth: '16px',
              borderStyle: 'solid',
              borderImage: `linear-gradient(45deg, ${
                node.frameColor
              }, white 400%) 1`,
            }}
          />

          <Heading level={3} mt={3} mb={2}>
            {node.fullName}
          </Heading>
          <Paragraph textStyle="caps" color="blue" mt={0}>
            {node.role}
          </Paragraph>

          <Paragraph fontSize={0} fontWeight="bold">
            <Link href={`mailto:${node.email}`}>{node.email}</Link>
          </Paragraph>
        </Text>
      ))}
    </Flex>
  );
}
