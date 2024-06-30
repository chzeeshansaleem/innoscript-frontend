import React from 'react';
import HeroSection from '../servicesProvider/HeroSection';
import ServiceDescriptionSection from '../servicesProvider/ServiceDescriptionSection';
import BenefitsSection from '../servicesProvider/BenefitsSection';
import WorkingProcessSection from '../servicesProvider/WorkingProcessSection';
import { SEO } from '../../../constants/Constants'
import  "../../services/Service.css"
const Seo = () => {
  return (
    <div>
      <HeroSection data={SEO.heroSection} />
      <ServiceDescriptionSection data={SEO.serviceDescription} />
      <BenefitsSection data={SEO.benefits} />
      <WorkingProcessSection data={SEO.workingProcess} />
    </div>
  )
}

export default Seo