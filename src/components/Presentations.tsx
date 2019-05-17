import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Presentation from './Presentation';

export default function Presentations() {
  const data = useStaticQuery(graphql`
    {
      allProgramsYaml(
        filter: { presenter: { fullName: { ne: null } } }
        sort: { fields: [startTime, venue], order: [ASC, DESC] }
      ) {
        nodes {
          id
          title
          startTimeRaw: startTime
          startTimeFormatted: startTime(formatString: "LT", locale: "hu")
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
    }
  `);

  return data.allProgramsYaml.nodes.map((node: any) => (
    <Presentation
      key={node.id}
      title={node.title}
      startTimeRaw={node.startTimeRaw}
      startTimeFormatted={node.startTimeFormatted}
      venue={node.venue}
      abstract={node.abstract}
      presenter={{
        ...node.presenter,
        picture: { childImageSharp: node.childImageSharp },
      }}
    />
  ));
}
