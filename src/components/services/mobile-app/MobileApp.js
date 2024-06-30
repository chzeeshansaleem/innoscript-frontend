import React from 'react'
import HeroSection from '../servicesProvider/HeroSection';
import ServiceDescriptionSection from '../servicesProvider/ServiceDescriptionSection';
import BenefitsSection from '../servicesProvider/BenefitsSection';
import WorkingProcessSection from '../servicesProvider/WorkingProcessSection';
import { MOBILE_APP_DEVELOPMENT } from '../../../constants/Constants'
import  "../../services/Service.css"
const MobileApp = () => {
  return (
    <div>
    <HeroSection data={MOBILE_APP_DEVELOPMENT.heroSection} />
    <ServiceDescriptionSection data={MOBILE_APP_DEVELOPMENT.serviceDescription} />
    <BenefitsSection data={MOBILE_APP_DEVELOPMENT.benefits} />
    <WorkingProcessSection data={MOBILE_APP_DEVELOPMENT.workingProcess} />
  </div>
  )
}

export default MobileApp