import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Presentation, { PresentationProps } from '../../components/Presentation';
import VenueHeader from '../../components/VenueHeader';
import { useCurrentUnixMs } from '../../utils/hooks';

type IB028PageContentProps = {
  presentations: (PresentationProps & { startTimeUnixMs: string })[];
};

function IB028PageContent({ presentations }: IB028PageContentProps) {
  const currentUnixMs = useCurrentUnixMs();

  const firstUpcomingPresentationIndex = Math.max(
    0,
    presentations.findIndex(
      presentation =>
        Number.parseInt(presentation.startTimeUnixMs, 10) >= currentUnixMs,
    ),
  );
  const upcomingPresentations = presentations.slice(
    firstUpcomingPresentationIndex,
  );

  const currentPresentation =
    firstUpcomingPresentationIndex > 0
      ? presentations[firstUpcomingPresentationIndex - 1]
      : null;

  return (
    <>
      <VenueHeader level={1} fontSize="4.214rem" textAlign="center">
        IB028
      </VenueHeader>

      {currentPresentation != null && (
        <Presentation {...currentPresentation} hideVenue />
      )}
    </>
  );
}

export default function IB028Page({ data }: any) {
  return (
    <Layout hasFooter={false}>
      <IB028PageContent
        presentations={data.allPresentationsYaml.edges.map(({ node }) => node)}
      />
    </Layout>
  );
}

export const query = graphql`
  {
    allPresentationsYaml(
      filter: { venue: { regex: "/^ib028$/i" } }
      sort: { fields: startTime, order: ASC }
    ) {
      edges {
        node {
          id
          title
          startTimeRaw: startTime
          startTimeUnixMs: startTime(formatString: "x")
          startTimeFormatted: startTime(formatString: "LT", locale: "hu")
          venue
          abstract
          presenter {
            fullName
            picture {
              childImageSharp {
                fixed(width: 192, height: 192) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            organization {
              id
              website
            }
            region
            role
          }
        }
      }
    }
  }
`;
