import React from 'react';

const BenefitsSection = ({ data }) => {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="text-center mb-4">{data.title}</h2>
        <ul className="benefits-list">
          {data.items.map((item, index) => (
            <li key={index} data-aos="fade-down" data-aos-delay={(index + 1) * 100}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
