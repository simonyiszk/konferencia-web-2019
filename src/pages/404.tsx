import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <Heading level={1}>Page not found</Heading>
      <Paragraph>The requested page is unavailable.</Paragraph>
    </Layout>
  );
}
