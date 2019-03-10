import { graphql, useStaticQuery } from 'gatsby';
import { fluidRange } from 'polished';
import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    font-family: Raleway, system-ui;
    font-weight: 500;

    ${fluidRange(
      // Responsive font sizing
      {
        prop: 'fontSize',
        fromSize: '1em',
        toSize: '1.5em',
      },
      '37.5em',
      '120em',
    )};

    /* Prevent adjustments of font size after orientation changes in iOS */
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          language
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />

        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600"
            rel="stylesheet"
          />
        </Helmet>

        <header>{/* TODO */}</header>

        <main>{children}</main>

        <footer>{/* TODO */}</footer>
      </div>
    </ThemeProvider>
  );
}
