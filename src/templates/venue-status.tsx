import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Presentation, {
  PresentationCaption,
  PresentationCaptionProps,
  PresentationLayout,
  PresentationProps,
} from '../components/Presentation';
import ScheduledPresentation from '../components/ScheduledPresentation';
import VenueHeader from '../components/VenueHeader';
import { useCurrentUnixMs } from '../utils/hooks';

const maxShownPresentations = 3;
const millisecsInMinute = 1000 * 60;

export type ProgramProps = PresentationCaptionProps & {
  title: string;
  startTimeUnixMs: string;
  endTimeUnixMs: string;
};

const isProgramRunning = (localTimeMs: number, program: ProgramProps) =>
  localTimeMs >= Number.parseInt(program.startTimeUnixMs, 10) &&
  localTimeMs < Number.parseInt(program.endTimeUnixMs, 10);

type VenueStatusTemplateContentProps = {
  presentations: (PresentationProps & ProgramProps)[];
  specialPrograms: ProgramProps[];
  forwardIcon: any; // TODO: Use FixedObject of gatsby-image
};

function VenueStatusTemplateContent({
  presentations,
  specialPrograms,
  forwardIcon,
}: VenueStatusTemplateContentProps) {
  const currentUnixMs = useCurrentUnixMs();
  const currentLocalTimeMs =
    currentUnixMs - new Date().getTimezoneOffset() * millisecsInMinute;

  const isProgramCurrentlyRunning = isProgramRunning.bind(
    null,
    currentLocalTimeMs,
  );

  const currentSpecialProgram = specialPrograms.find(isProgramCurrentlyRunning);
  const currentPresentation = presentations.find(isProgramCurrentlyRunning);

  const upcomingPresentations = presentations
    .filter(
      presentation =>
        Number.parseInt(presentation.startTimeUnixMs, 10) > currentLocalTimeMs,
    )
    .slice(0, maxShownPresentations - (currentPresentation != null ? 1 : 0));

  return (
    <>
      <VenueHeader level={1} fontSize="3.16em" textAlign="center">
        {presentations[0].venue}
      </VenueHeader>

      <Container>
        {currentPresentation != null && (
          <Presentation {...currentPresentation} venue={undefined} />
        )}

        {currentSpecialProgram != null || upcomingPresentations.length === 0 ? (
          currentPresentation == null && (
            <Heading level={3} fontSize="5.619em" textAlign="center">
              {currentSpecialProgram != null
                ? currentSpecialProgram.title
                : 'Köszönjük a részvételt!'}
            </Heading>
          )
        ) : (
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

export default function VenueStatusTemplate({ data }: any) {
  return (
    <Layout hasFooter={false}>
      <VenueStatusTemplateContent
        presentations={data.presentations.edges.map(({ node }: any) => node)}
        specialPrograms={data.specialPrograms.edges.map(
          ({ node }: any) => node,
        )}
        forwardIcon={data.forwardIcon}
      />
    </Layout>
  );
}

export const query = graphql`
  query($venue: String!) {
    presentations: allProgramsYaml(
      filter: { venue: { eq: $venue }, presenter: { fullName: { ne: null } } }
      sort: { fields: startTime, order: ASC }
    ) {
      edges {
        node {
          id
          title
          startTimeRaw: startTime
          startTimeUnixMs: startTime(formatString: "x")
          startTimeFormatted: startTime(formatString: "LT", locale: "hu")
          endTimeUnixMs: endTime(formatString: "x")
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

    specialPrograms: allProgramsYaml(
      filter: { venue: { eq: $venue }, presenter: { fullName: { eq: null } } }
      sort: { fields: startTime, order: ASC }
    ) {
      edges {
        node {
          id
          title
          startTimeUnixMs: startTime(formatString: "x")
          endTimeUnixMs: endTime(formatString: "x")
          venue
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
