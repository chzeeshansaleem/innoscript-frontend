import React from 'react';
import HeroSection from '../servicesProvider/HeroSection';
import ServiceDescriptionSection from '../servicesProvider/ServiceDescriptionSection';
import BenefitsSection from '../servicesProvider/BenefitsSection';
import WorkingProcessSection from '../servicesProvider/WorkingProcessSection';
import { DEVOPS } from '../../../constants/Constants'
const DevOps = () => {
  return (
    <div>
    <HeroSection data={DEVOPS.heroSection} />
    <ServiceDescriptionSection data={DEVOPS.serviceDescription} />
    <BenefitsSection data={DEVOPS.benefits} />
    <WorkingProcessSection data={DEVOPS.workingProcess} />
  </div>
  )
}

export default DevOps