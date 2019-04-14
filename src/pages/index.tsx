import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Contacts from '../components/Contacts';
import Container from '../components/Container';
import Giveaway from '../components/Giveaway';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Note from '../components/Note';
import Paragraph from '../components/Paragraph';
import Presentations from '../components/Presentations';
import Sponsors from '../components/Sponsors';
import Streams from '../components/Streams';
import { ReactComponent as Logo } from '../assets/logo.svg';
import ScheduleURL from '../data/schedule.pdf';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero>
        <Logo alt={data.site.siteMetadata.title} height="4em" />
        <Streams />
      </Hero>

      <Container>
        <Note my="2em">{data.site.siteMetadata.description}</Note>

        <Heading level={2} textAlign="center">
          Előadások
        </Heading>
        <Paragraph textAlign="center" pb="0.5em">
          A programterv egy oldalas, nyomtatható változata{' '}
          <Link href={ScheduleURL}>innen</Link> érhető el.
        </Paragraph>
        <Presentations />

        <Heading level={2} textAlign="center">
          Nyereményjáték
        </Heading>
        <Giveaway />

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
