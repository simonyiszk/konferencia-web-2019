import React from 'react';
import GradientBackgroundText from './GradientBackgroundText';
import Heading from './Heading';
import PresenterDetails, { PresenterDetailsProps } from './PresenterDetails';
import Text from './Text';

export type ScheduledPresentationProps = {
  title: string;
  presenter: PresenterDetailsProps;
};

const ScheduledPresentation: React.FunctionComponent<
  ScheduledPresentationProps
> = ({ title, presenter }) => (
  <Text fontSize={0} mb={4}>
    <Heading as={GradientBackgroundText} level={3} my={0}>
      {title}
    </Heading>

    <PresenterDetails {...presenter} my="0.67em" />
  </Text>
);

export default ScheduledPresentation;
