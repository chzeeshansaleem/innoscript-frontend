import React from 'react'
import HeroSection from '../servicesProvider/HeroSection';
import ServiceDescriptionSection from '../servicesProvider/ServiceDescriptionSection';
import BenefitsSection from '../servicesProvider/BenefitsSection';
import WorkingProcessSection from '../servicesProvider/WorkingProcessSection';
import { UI_UX } from '../../../constants/Constants'
import  "../../services/Service.css"
const UiUx = () => {
  return (
    <div>
    <HeroSection data={UI_UX.heroSection} />
    <ServiceDescriptionSection data={UI_UX.serviceDescription} />
    <BenefitsSection data={UI_UX.benefits} />
    <WorkingProcessSection data={UI_UX.workingProcess} />
  </div>
  )
}

export default UiUx