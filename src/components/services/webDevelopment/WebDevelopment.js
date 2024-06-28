import React from 'react';
import HeroSection from '../servicesProvider/HeroSection';
import ServiceDescriptionSection from '../servicesProvider/ServiceDescriptionSection';
import BenefitsSection from '../servicesProvider/BenefitsSection';
import WorkingProcessSection from '../servicesProvider/WorkingProcessSection';
import { WEB_DEVELOPMENT } from '../../../constants/Constants'
import  "../../services/Service.css"
const WebDevelopment = () => {
  return (
    <div>
      <HeroSection data={WEB_DEVELOPMENT.heroSection} />
      <ServiceDescriptionSection data={WEB_DEVELOPMENT.serviceDescription} />
      <BenefitsSection data={WEB_DEVELOPMENT.benefits} />
      <WorkingProcessSection data={WEB_DEVELOPMENT.workingProcess} />
    </div>
  );
};

export default WebDevelopment;
