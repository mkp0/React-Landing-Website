import { Carousel } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

const styles = {
  "img-width": {
    height: "90vh",
    objectFit: "cover",
    opacity: 1,
    filter: "brightness(60%)",
  },
};

const StyledA = styled(Carousel.Caption)`
  top: 60%;
`;

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="img-cover">
          <img
            style={styles["img-width"]}
            className="d-block w-100"
            src="https://picsum.photos/500"
            alt="First slide"
          />
        </div>
        <StyledA>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </StyledA>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="img-cover">
          <img
            style={styles["img-width"]}
            className="d-block w-100"
            src="https://picsum.photos/501"
            alt="Second slide"
          />
        </div>
        <StyledA>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </StyledA>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-cover">
          <img
            style={styles["img-width"]}
            className="d-block w-100"
            src="https://picsum.photos/502"
            alt="Third slide"
          />
        </div>
        <StyledA>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </StyledA>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
