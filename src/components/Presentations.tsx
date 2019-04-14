import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Presentation from './Presentation';

export default function Presentations() {
  const data = useStaticQuery(graphql`
    {
      allPresentationsYaml(
        sort: { fields: [startTime, venue], order: [ASC, DESC] }
      ) {
        edges {
          node {
            id
            title
            startTimeRaw: startTime
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
  `);

  return data.allPresentationsYaml.edges.map(({ node }: any) => (
    <Presentation
      key={node.id}
      title={node.title}
      startTime={{ raw: node.startTimeRaw, formatted: node.startTimeFormatted }}
      venue={node.venue}
      abstract={node.abstract}
      presenter={node.presenter}
    />
  ));
}
