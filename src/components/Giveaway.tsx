import React from 'react';
import Measure from './Measure';
import Note from './Note';
import Paragraph from './Paragraph';
import { ReactComponent as DisplayGiveawayPromo } from '../assets/display-giveaway-promo.svg';

export default function Giveaway() {
  return (
    <>
      <Measure maxWidth="16em" lineHeight={0} mx="auto">
        <DisplayGiveawayPromo />
      </Measure>

      <Note mt="1.75em">
        Regisztrálj a konferenciára, látogass meg legalább 3 standot a helyszíni
        expón és nyerj egy ultrawide monitort!
      </Note>

      <Paragraph fontSize={0} textAlign="center">
        Egyes előadásokon további értékes nyereményekkel gazdagodhatsz!
      </Paragraph>
    </>
  );
}
