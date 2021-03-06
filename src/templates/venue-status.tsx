import { Flex } from '@rebass/grid';
import { graphql } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import FullHeight from '../components/FullHeight';
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

interface VenueStatusTemplateContentProps {
  presentations: (PresentationProps &
    ProgramProps & {
      id: string;
      childImageSharp: any; // TODO: Use FixedObject of gatsby-image
    })[];
  specialPrograms: ProgramProps[];
  forwardIcon: any; // TODO: Use FixedObject of gatsby-image
}

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
    <Flex as={FullHeight} flexDirection="column">
      <VenueHeader level={1} fontSize="3.16em" textAlign="center">
        {presentations[0].venue}
      </VenueHeader>

      <Flex
        as={Container}
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        {currentPresentation != null && (
          <Presentation
            {...currentPresentation}
            presenter={{
              ...currentPresentation.presenter,
              picture: { childImageSharp: currentPresentation.childImageSharp },
            }}
            venue={undefined}
          />
        )}

        {currentSpecialProgram != null || upcomingPresentations.length === 0 ? (
          currentPresentation == null && (
            <Heading level={3} fontSize="5.619em" textAlign="center" mt="0.5em">
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
            width="100%"
          >
            {upcomingPresentations.map(presentation => (
              <ScheduledPresentation key={presentation.id} {...presentation} />
            ))}
          </PresentationLayout>
        )}
      </Flex>
    </Flex>
  );
}

export default function VenueStatusTemplate({ data }: any) {
  return (
    <Layout hasFooter={false}>
      <VenueStatusTemplateContent
        presentations={data.presentations.nodes}
        specialPrograms={data.specialPrograms.nodes}
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
      nodes {
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
          organization {
            id
            website
          }
          region
          role
        }
        childImageSharp {
          fixed(width: 192, height: 192) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }

    specialPrograms: allProgramsYaml(
      filter: { venue: { eq: $venue }, presenter: { fullName: { eq: null } } }
      sort: { fields: startTime, order: ASC }
    ) {
      nodes {
        id
        title
        startTimeUnixMs: startTime(formatString: "x")
        endTimeUnixMs: endTime(formatString: "x")
        venue
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
