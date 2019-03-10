import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import CapitalizedTime from '../components/CapitalizedTime';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Text from '../components/Text';
import Logo from '../assets/logo.svg';

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
          <CapitalizedTime dateTime={data.site.siteMetadata.event.dateRaw}>
            {data.site.siteMetadata.event.dateFormatted}
          </CapitalizedTime>
          {` – ${data.site.siteMetadata.event.venue}`}
        </Text>
      </Hero>
    </Layout>
  );
}
