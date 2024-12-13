import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Our journey began with a commitment to making quality healthcare accessible to everyone. Over the years, our state-of-the-art infrastructure, advanced technologies, and expert medical professionals have enabled us to offer a wide range of services, from preventive care to complex treatments.
          </p>
          <p></p>
          <p></p>
          <p>
          ZeeCare Medical Institute is more than just a healthcare provider; we are a family committed to your well-being. With a team of highly skilled doctors, nurses, and support staff, we work tirelessly to ensure every patient feels valued and cared for.
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Biography;
