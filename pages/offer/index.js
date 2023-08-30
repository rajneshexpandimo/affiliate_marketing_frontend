import ActiveAffiliate from "../../components/offer/active_affiliate";
import Banner from "../../components/offer/banner";
import GetNotified from "../../components/offer/get_notified";
import JoinUs from "../../components/offer/join_us";
import PopularOffer from "../../components/offer/popular_offer";
import React from "react";

const Offer = () => {
  return (
    <>
      <Banner />
      <PopularOffer/>
      <JoinUs/>
      <ActiveAffiliate/>
      <GetNotified/>
    </>
  );
};

export default Offer;
