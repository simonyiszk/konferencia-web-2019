import React from 'react';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Logo from '../assets/logo.svg';

export default function IndexPage() {
  return (
    <Layout>
      <Hero>
        <Logo height="4em" />
        <Heading level={1}>Simonyi Konferencia</Heading>
        <Heading as="p" level={2}>
          <time dateTime="2019-04-16">Április 16.</time> – BME I épület
        </Heading>
      </Hero>
    </Layout>
  );
}
