import Space from '@rebass/space';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FacebookSquare, Instagram, Youtube } from 'styled-icons/fa-brands';
import ExternalLink from './ExternalLink';
import Text from './Text';

const ExternalIconLink = styled(ExternalLink)`
  :hover {
    color: white;
  }
`;

ExternalIconLink.defaultProps = {
  ...ExternalIconLink.defaultProps,
  color: 'moonGray',
};

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            facebookURL
            instagramURL
            youTubeURL
          }
        }
      }
    }
  `);

  const {
    facebookURL,
    instagramURL,
    youTubeURL,
  } = data.site.siteMetadata.social;

  return (
    <Text as="footer" textAlign="center" bg="darkGray" py={4} ml={-5}>
      <Space ml={5}>
        <ExternalIconLink href={facebookURL}>
          <FacebookSquare size="2em" title="Facebook" />
        </ExternalIconLink>

        <ExternalIconLink href={instagramURL}>
          <Instagram size="2em" title="Instagram" />
        </ExternalIconLink>

        <ExternalIconLink href={youTubeURL}>
          <Youtube size="2em" title="YouTube" />
        </ExternalIconLink>
      </Space>
    </Text>
  );
}
