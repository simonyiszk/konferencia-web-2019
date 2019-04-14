import React from 'react';
import Link from './Link';
import Measure from './Measure';
import Note from './Note';
import Paragraph from './Paragraph';
import { ReactComponent as DisplayGiveawayPromo } from '../assets/display-giveaway-promo.svg';
import ExpoMapURL from '../data/expo-map.pdf';

export default function Giveaway() {
  return (
    <>
      <Measure as={Paragraph} textAlign="center" mx="auto">
        Regisztrálj a konferenciára, látogass meg legalább 3&nbsp;standot a{' '}
        <Link href={ExpoMapURL}>helyszíni&nbsp;expón</Link> és{' '}
        <strong>nyerj egy ultrawide monitort!</strong>
      </Measure>

      <Measure maxWidth="16em" mx="auto" my="1.5em">
        <DisplayGiveawayPromo />
      </Measure>

      <Note mb="3em">
        Egyes előadásokon további értékes nyereményekkel gazdagodhatsz!
      </Note>
    </>
  );
}
