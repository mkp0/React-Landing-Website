import React, { useState, useEffect } from "react";

const styles = {
  content: {
    color: "white",
    background: "black",
  },
};

function ContantShow({ logo, idx }) {
  idx = idx % 2;

  const [colClass, setColClass] = useState("");

  useEffect(() => {
    if (idx % 2 === 0) {
      setColClass("col-md-6 p-0");
    } else {
      setColClass("col-md-6 order-2 p-0");
    }
    sizeCapture();
  }, []);

  const sizeCapture = () => {
    if (window.innerWidth <= 960) {
      setColClass("col-md-6");
    } else {
      if (idx === 0) {
        setColClass("col-md-6 p-0");
      } else {
        setColClass("col-md-6 order-2 p-0");
      }
    }
  };

  window.addEventListener("resize", sizeCapture);

  return (
    <div className="row">
      <div className={colClass}>
        <div className="d-flex justify-content-center align-content-center">
          <img src={logo} alt="logo" width="80%"></img>
        </div>
      </div>
      <div
        className="col-md-6 bg-dark text-light d-flex align-items-center p-0"
        style={{ minHeight: "20rem" }}
      >
        <div className={styles.content}>
          <h1
            style={{
              backgroundColor: "red",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Hello {idx}
          </h1>
          <div style={{ padding: "2rem 2rem 0 2rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ContantShow;
