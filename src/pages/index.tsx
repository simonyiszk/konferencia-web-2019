import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Logo from '../assets/logo.svg';

export default function IndexPage() {
  return (
    <Layout>
      <Hero>
        <Logo height="4em" />
        <h1>Simonyi Konferencia</h1>
        <p>
          <time dateTime="2019-04-16">Április 16.</time> – BME I épület
        </p>
      </Hero>
    </Layout>
  );
}
