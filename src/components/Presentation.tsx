import { Box, Flex } from '@rebass/grid';
import Img from 'gatsby-image';
import React from 'react';
import ExternalLink from './ExternalLink';
import GradientBackgroundText from './GradientBackgroundText';
import Heading from './Heading';
import Measure from './Measure';
import Paragraph from './Paragraph';

type Organization = {
  id: string;
  website: string;
};

export type PresentationProps = {
  title: string;
  startTimeRaw: string;
  startTimeFormatted: string;
  venue: string;
  abstract: string;
  presenter: {
    fullName: string;
    picture: any; // TODO: Use FixedObject of gatsby-image
    organization?: Organization;
    region?: string;
    role?: string;
  };
  hideVenue?: boolean;
};

const Presentation: React.FunctionComponent<PresentationProps> = ({
  title,
  startTimeRaw,
  startTimeFormatted,
  venue,
  abstract,
  presenter,
  hideVenue = false,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" my={4} ml={-5}>
      <Box pl={5}>
        <Img
          fixed={presenter.picture.childImageSharp.fixed}
          imgStyle={{ borderRadius: '50%' }}
        />

        <Paragraph
          textStyle="space"
          fontWeight="bold"
          textAlign="center"
          color="darkGray"
          mt={2}
        >
          <time dateTime={startTimeRaw}>{startTimeFormatted}</time>
          {!hideVenue && ` @ ${venue}`}
        </Paragraph>
      </Box>

      <Measure flex="1 30em" pl={5}>
        <GradientBackgroundText as={Heading} level={3} my={0}>
          {title}
        </GradientBackgroundText>

        <Paragraph textStyle="caps" color="blue">
          {presenter.fullName} – {presenter.role && `${presenter.role}`}
          {presenter.organization && (
            <>
              {presenter.role && ', '}
              <ExternalLink href={presenter.organization.website}>
                {`${presenter.organization.id}${
                  presenter.region != null ? ` ${presenter.region}` : ''
                }`}
              </ExternalLink>
            </>
          )}
        </Paragraph>

        <Paragraph mt={0}>{abstract}</Paragraph>
      </Measure>
    </Flex>
  );
};

export default Presentation;
