import React from 'react';

const WorkingProcessSection = ({ data }) => {
  return (
    <div className="working-process-section">
      <div className="container">
        <h2 className="section-title text-center text-white">{data.title}</h2>
        <div className="row process-steps">
          <div className="col-lg-6 col-md-6 working-process-details">
            <p className="section-description text-center text-white mt-5">
              {data.description}
            </p>
            <img
              src={data.image}
              alt="work-process"
              className="img-fluid"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
          <div className="col-lg-6 row">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6"
                data-aos={index % 2 === 0 ? 'fade-down-right' : 'fade-down-left'}
                data-aos-delay={(index + 1) * 100}
              >
                <div className="process-step">
                  <div className="process-icon">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessSection;
