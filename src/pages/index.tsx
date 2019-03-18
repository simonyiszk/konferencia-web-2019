import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';
import Presentations from '../components/Presentations';
import Text from '../components/Text';
import { ReactComponent as Logo } from '../assets/logo.svg';

function toSentenceCase(string: string) {
  return `${string[0].toUpperCase()}${string.substring(1)}`;
}

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          event {
            dateRaw: date
            dateFormatted: date(formatString: "MMMM Do", locale: "hu")
            venue
            registrationURL
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero>
        <Logo height="4em" />
        <Heading level={1} fontSize={2} mb={3}>
          Simonyi Konferencia
        </Heading>

        <Text fontSize={1} color="moonGray" mt={0} mb={3}>
          <time dateTime={data.site.siteMetadata.event.dateRaw}>
            {toSentenceCase(data.site.siteMetadata.event.dateFormatted)}
          </time>
          {` – ${data.site.siteMetadata.event.venue}`}
        </Text>

        <Text color="moonGray">
          <LinkButton href={data.site.siteMetadata.event.registrationURL}>
            Regisztráció
          </LinkButton>
        </Text>
      </Hero>

      <Heading level={2} textAlign="center">
        Előadások
      </Heading>
      <Presentations />
    </Layout>
  );
}
