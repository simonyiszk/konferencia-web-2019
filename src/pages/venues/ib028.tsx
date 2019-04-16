import { graphql } from 'gatsby';
import React from 'react';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Presentation, {
  PresentationCaption,
  PresentationLayout,
  PresentationProps,
} from '../../components/Presentation';
import ScheduledPresentation from '../../components/ScheduledPresentation';
import VenueHeader from '../../components/VenueHeader';
import { useCurrentUnixMs } from '../../utils/hooks';

const maxShownUpcomingPresentations = 2;

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
        Number.parseInt(presentation.startTimeUnixMs, 10) > currentUnixMs,
    ),
  );
  const upcomingPresentations = presentations.slice(
    firstUpcomingPresentationIndex,
    firstUpcomingPresentationIndex + maxShownUpcomingPresentations,
  );

  const currentPresentation =
    firstUpcomingPresentationIndex > 0
      ? presentations[firstUpcomingPresentationIndex - 1]
      : null;

  return (
    <>
      <VenueHeader level={1} fontSize="3.16em" textAlign="center">
        IB028
      </VenueHeader>

      <Container>
        {currentPresentation != null && (
          <Presentation {...currentPresentation} />
        )}

        {upcomingPresentations.length > 0 && (
          <PresentationLayout
            picture={forwardIcon}
            caption={() => (
              <PresentationCaption
                startTimeRaw={upcomingPresentations[0].startTimeRaw}
                startTimeFormatted={upcomingPresentations[0].startTimeFormatted}
              />
            )}
          >
            {upcomingPresentations.map(presentation => (
              <ScheduledPresentation key={presentation.id} {...presentation} />
            ))}
          </PresentationLayout>
        )}
      </Container>
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
