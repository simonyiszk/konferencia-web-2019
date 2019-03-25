import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Contacts from '../components/Contacts';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';
import Paragraph from '../components/Paragraph';
import Presentations from '../components/Presentations';
import Slogan from '../components/Slogan';
import Sponsors from '../components/Sponsors';
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
          description
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
        <Heading level={1} fontSize={3} mb={3}>
          Simonyi Konferencia
        </Heading>

        <Text fontSize={2} fontFamily="heading" color="moonGray" mt={0} mb={3}>
          <time dateTime={data.site.siteMetadata.event.dateRaw}>
            {toSentenceCase(data.site.siteMetadata.event.dateFormatted)}
          </time>
          {` – ${data.site.siteMetadata.event.venue}`}
        </Text>

        <Text color="moonGray">
          <LinkButton
            href={data.site.siteMetadata.event.registrationURL}
            mt={1}
          >
            Regisztráció
          </LinkButton>
        </Text>

        <Slogan as={Paragraph} p={3} mx="auto" mb={5}>
          {data.site.siteMetadata.description}
        </Slogan>
      </Hero>

      <Container>
        <Heading level={2} textAlign="center">
          Előadások
        </Heading>
        <Presentations />

        <Heading level={2} textAlign="center">
          Kapcsolat
        </Heading>
        <Contacts />

        <Heading level={2} textAlign="center">
          Szponzoraink
        </Heading>
        <Sponsors />
      </Container>
    </Layout>
  );
}
