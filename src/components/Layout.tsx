import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import defaultTheme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    /* Fluid typography: 100% @ 600w -> 150% @ 1920w */
    /* Source: https://css-tricks.com/snippets/css/fluid-typography/ */
    font-family: ${({ theme }: any) => theme.fonts.body};
    font-size: calc(1em + (100vw - 37.5em) / 165);
    font-variant-numeric: lining-nums;
  }

  body {
    margin: 0;
    color: ${({ theme }: any) => theme.colors.nearBlack};

    /* Prevent adjustments of font size after orientation changes in iOS */
    text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          languageCode
          countryCode
          canonicalURL
        }
      }

      coverImage: file(name: { eq: "cover" }) {
        publicURL
      }
    }
  `);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />

        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.languageCode} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Raleway:400,600"
            rel="stylesheet"
          />

          <meta
            property="og:image"
            content={`${
              data.site.siteMetadata.canonicalURL
            }${data.coverImage.publicURL.substring(1)}`}
          />
          <meta
            property="og:locale"
            content={`${data.site.siteMetadata.languageCode}_${
              data.site.siteMetadata.countryCode
            }`}
          />
        </Helmet>

        <header>{/* TODO */}</header>

        <main>{children}</main>

        <footer>{/* TODO */}</footer>
      </div>
    </ThemeProvider>
  );
}
