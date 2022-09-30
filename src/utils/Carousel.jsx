import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

export const TestimonyCarousel = () => {
  return (
    <div>
      <Carousel>
        <div className="mobile-write-aboutus-container">
          <div>
            <div className="mobile-write-aboutus-header">
              <p>
              Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

            <div className="mobile-write-aboutus-inner">
              <p>31 Dec 2021</p>
              <h3>Amb Crypto</h3>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export const FeatureCarousel = () => {
  return(
  <div>
    <Carousel>
      <div className="featuresCard">
        <div className="featuresImgContainer">
          <img
            src="../assets/featureImg1.png"
            alt=""
            srcset=""
          />
          <h5>Permission-Less</h5>
        </div>
        <div className="featuresTextContainer">
          <p>
            Unilend is a permission-less decentralized protocol that combines
            spot UniLend is a permission-less decentralized protocol that
            combines spot
          </p>
          <h4>HOW IT WORKS</h4>
        </div>
      </div>
      <div className="featuresCard">
        <div className="featuresImgContainer">
          <img
            src="../assets/featureImg1.png"
            alt=""
            srcset=""
            style={{ width: "202px", height: "202px" }}
          />
          <h5>Permission-Less</h5>
        </div>
        <div className="featuresTextContainer">
          <p>
            Unilend is a permission-less decentralized protocol that combines
            spot UniLend is a permission-less decentralized protocol that
            combines spot
          </p>
          <h4>HOW IT WORKS</h4>
        </div>
      </div>

    </Carousel>
  </div>
  );
};
