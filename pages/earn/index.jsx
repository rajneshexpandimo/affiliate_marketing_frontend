import Banner from '../../components/earn/banner'
import HigherCTR from '../../components/earn/higherCtr'
import Monetization from '../../components/earn/monetization'
import PartnerNetwork from '../../components/earn/partnerNetwork'
import PromoteLove from '../../components/earn/promoteLove'
import WhySocialProfit from '../../components/earn/whySocialProfit'
import React from 'react'

const Earn = () => {
  return (
    <div>
      <Banner/>
      <WhySocialProfit/>
      <PromoteLove/>
      <Monetization/>
      <HigherCTR/>
      <PartnerNetwork/>
    </div>
  )
}

export default Earn
