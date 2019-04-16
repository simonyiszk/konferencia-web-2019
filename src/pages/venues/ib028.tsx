import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Presentation, {
  PresentationLayout,
  PresentationProps,
} from '../../components/Presentation';
import VenueHeader from '../../components/VenueHeader';
import { useCurrentUnixMs } from '../../utils/hooks';

type IB028PageContentProps = {
  presentations: (PresentationProps & { startTimeUnixMs: string })[];
  forwardIcon: any; // TODO: Use FixedObject of gatsby-image
};

function IB028PageContent({
  presentations,
  forwardIcon,
}: IB028PageContentProps) {
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

      {upcomingPresentations.length > 0 && (
        <PresentationLayout picture={forwardIcon}>TODO</PresentationLayout>
      )}
    </>
  );
}

export default function IB028Page({ data }: any) {
  return (
    <Layout hasFooter={false}>
      <IB028PageContent
        presentations={data.allPresentationsYaml.edges.map(
          ({ node }: any) => node,
        )}
        forwardIcon={data.forwardIcon}
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

    forwardIcon: file(name: { eq: "forward-icon" }) {
      childImageSharp {
        fixed(width: 192, height: 192) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
