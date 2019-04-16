import { Box } from '@rebass/grid';
import React from 'react';
import GradientBackgroundText from './GradientBackgroundText';
import Heading from './Heading';
import PresenterDetails, { PresenterDetailsProps } from './PresenterDetails';

export type ScheduledPresentationProps = {
  title: string;
  presenter: PresenterDetailsProps;
};

const ScheduledPresentation: React.FunctionComponent<
  ScheduledPresentationProps
> = ({ title, presenter }) => (
  <Box mb={4}>
    <Heading as={GradientBackgroundText} level={3} fontSize={1} my={0}>
      {title}
    </Heading>

    <PresenterDetails {...presenter} my="0.67em" />
  </Box>
);

export default ScheduledPresentation;
