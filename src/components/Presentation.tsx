import { Box, Flex } from '@rebass/grid';
import Img from 'gatsby-image';
import React from 'react';
import GradientBackgroundText from './GradientBackgroundText';
import Heading from './Heading';
import Measure from './Measure';
import Paragraph from './Paragraph';
import PresenterDetails from './PresenterDetails';
import { ScheduledPresentationProps } from './ScheduledPresentation';

export interface PresentationCaptionProps {
  startTimeRaw: string;
  startTimeFormatted: string;
  venue?: string;
}

export const PresentationCaption = ({
  startTimeRaw,
  startTimeFormatted,
  venue,
}: PresentationCaptionProps) => (
  <Paragraph
    textStyle="space"
    fontWeight="bold"
    textAlign="center"
    color="darkGray"
    mt={2}
  >
    <time dateTime={startTimeRaw}>{startTimeFormatted}</time>
    {venue != null && ` @ ${venue}`}
  </Paragraph>
);

export type PresentationProps = ScheduledPresentationProps &
  PresentationCaptionProps & {
    abstract: string;
    presenter: {
      picture: any; // TODO: Use FixedObject of gatsby-image
    };
  };

interface PresentationLayoutProps {
  picture: Pick<
    (Pick<PresentationProps, 'presenter'>)['presenter'],
    'picture'
  >['picture'];
  children: React.ReactNode;
  caption?: () => React.ReactNode;
}

export const PresentationLayout = ({
  picture,
  children,
  caption,
}: PresentationLayoutProps) => (
  <Flex flexWrap="wrap" justifyContent="center" my={4} ml={-5}>
    <Box pl={5}>
      <Img
        fixed={picture.childImageSharp.fixed}
        imgStyle={{ borderRadius: '50%' }}
      />

      {caption != null && caption()}
    </Box>

    <Measure flex="1 30em" pl={5}>
      {children}
    </Measure>
  </Flex>
);

const Presentation = ({
  title,
  startTimeRaw,
  startTimeFormatted,
  venue,
  abstract,
  presenter,
}: PresentationProps) => (
  <PresentationLayout
    picture={presenter.picture}
    caption={() => (
      <Paragraph
        textStyle="space"
        fontWeight="bold"
        textAlign="center"
        color="darkGray"
        mt={2}
      >
        <time dateTime={startTimeRaw}>{startTimeFormatted}</time>
        {venue != null && ` @ ${venue}`}
      </Paragraph>
    )}
  >
    <GradientBackgroundText as={Heading} level={3} my={0}>
      {title}
    </GradientBackgroundText>

    <PresenterDetails {...presenter} />

    <Paragraph mt={0}>{abstract}</Paragraph>
  </PresentationLayout>
);

export default Presentation;
