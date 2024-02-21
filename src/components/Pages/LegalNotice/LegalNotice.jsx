/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import Footer from '../../Reusable/Footer/Footer';
import './LegalNotice.scss';
import ContentLegalNotice from './Components/ContentLegalNotice';

const LegalNotice = () => {
  return (
    <div className="legalNotice">
      <NavBarHeader />
      <ReturnTitle textContent="Mentions légales" />
      <ContentLegalNotice />
      <Footer />
    </div>
  );
};

export default LegalNotice;
