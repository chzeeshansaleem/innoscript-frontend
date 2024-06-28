import React from 'react';

const ServiceDescriptionSection = ({ data }) => {
  return (
    <section className="custom-software-development-section bg-dark">
      <div className="container">
        <div className="custom-software-description-services">
          <h2 className="text-center mb-4">{data.title}</h2>
          <p className="text-center">{data.description}</p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
          
            <img
              src={data.image}
              alt="Innoscripts images"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <ul className="software-development-process">
              {data.steps.map((step, index) => (
                <li key={index} data-aos="fade-down" data-aos-delay={(index + 1) * 100}>
                  <span className="process-step">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescriptionSection;
