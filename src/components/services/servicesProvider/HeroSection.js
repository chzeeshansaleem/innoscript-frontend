import React from 'react';
import { Helmet } from 'react-helmet'; 
const HeroSection = ({ data }) => {
  return (
    <section>
       <Helmet>
        <title>{`${data.title} | Innoscripts Technologies`}</title>
        <meta name="description" content={data.description} />
      </Helmet>
    <section id="custom-software-development-hero">
      <div className="hero-content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </section>
    </section>
  );
};

export default HeroSection;
