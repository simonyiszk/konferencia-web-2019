import React from 'react';
import ExternalLink from './ExternalLink';
import Paragraph from './Paragraph';
import { TextProps } from './Text';

type Organization = {
  id: string;
  website: string;
};

export type PresenterDetailsProps = {
  fullName: string;
  organization?: Organization;
  region?: string;
  role?: string;
} & TextProps;

const PresenterDetails: React.FunctionComponent<PresenterDetailsProps> = ({
  fullName,
  organization,
  region,
  role,
  ...props
}) => (
  <Paragraph textStyle="caps" color="blue" {...props}>
    {fullName} – {role && `${role}`}
    {organization && (
      <>
        {role && ', '}
        <ExternalLink href={organization.website}>
          {`${organization.id}${region != null ? ` ${region}` : ''}`}
        </ExternalLink>
      </>
    )}
  </Paragraph>
);

export default PresenterDetails;
