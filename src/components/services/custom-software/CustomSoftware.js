import React from 'react';
import HeroSection from '../servicesProvider/HeroSection';
import ServiceDescriptionSection from '../servicesProvider/ServiceDescriptionSection';
import BenefitsSection from '../servicesProvider/BenefitsSection';
import WorkingProcessSection from '../servicesProvider/WorkingProcessSection';
import { CUSTOM_SOFTWARE_DEVELOPMENT } from '../../../constants/Constants'
import  "../../services/Service.css"
const CustomSoftware = () => {
  return (
    <div>
    <HeroSection data={CUSTOM_SOFTWARE_DEVELOPMENT.heroSection} />
    <ServiceDescriptionSection data={CUSTOM_SOFTWARE_DEVELOPMENT.serviceDescription} />
    <BenefitsSection data={CUSTOM_SOFTWARE_DEVELOPMENT.benefits} />
    <WorkingProcessSection data={CUSTOM_SOFTWARE_DEVELOPMENT.workingProcess} />
  </div>
  )
}

export default CustomSoftware