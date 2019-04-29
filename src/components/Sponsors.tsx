import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ExternalLink from './ExternalLink';
import Heading from './Heading';
import Image from './Image';
import Text from './Text';

function groupBy<T extends { [key: string]: any }>(
  array: T[],
  propName: keyof T,
) {
  return array.reduce<{ [key: string]: T }>((acc, curr) => {
    const propValue = curr[propName];
    acc[propValue] = acc[propValue] || [];
    acc[propValue].push(curr);
    return acc;
  }, {});
}

const sponsorshipLevelNames = [
  'Főtámogató',
  'Kiemelt támogatók',
  'További támogatók',
];

export default function Sponsors() {
  const data = useStaticQuery(graphql`
    {
      allOrganizationsYaml(filter: { sponsorshipLevel: { gt: 0 } }) {
        edges {
          node {
            id
            sponsorshipLevel
            website
            logo {
              publicURL
            }
            logoHeightMultiplier
          }
        }
      }
    }
  `);

  const sponsorsByLevel = groupBy(
    data.allOrganizationsYaml.edges.map(({ node }) => node),
    'sponsorshipLevel',
  );

  return (
    <>
      {sponsorshipLevelNames.map((levelName, i) => {
        const levelID = sponsorshipLevelNames.length - i;
        const levelSponsors = sponsorsByLevel[levelID];

        return (
          <Text key={levelID} textAlign="center" mb={4}>
            <Heading level={3} textStyle="caps" mb={4}>
              {levelName}
            </Heading>

            <Text fontSize={i === 0 ? 3 : 2} ml={-5}>
              {levelSponsors.map(sponsor => (
                <ExternalLink key={sponsor.id} href={sponsor.website} ml={5}>
                  <Image
                    src={sponsor.logo.publicURL}
                    alt={sponsor.id}
                    height={`${sponsor.logoHeightMultiplier}em`}
                    mb={4}
                  />
                </ExternalLink>
              ))}
            </Text>
          </Text>
        );
      })}
    </>
  );
}
