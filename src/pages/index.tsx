import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Logo from '../assets/logo.svg';

export default function IndexPage() {
  return (
    <Layout>
      <Hero>
        <Logo />
        <h1>Simonyi Konferencia</h1>
        <p>Április 16. – BME I épület</p>
      </Hero>
    </Layout>
  );
}
