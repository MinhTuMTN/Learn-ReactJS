import React from "react";
import "./Feature.scss";

function Feature(props) {
  const [features] = [props.feature];
  return (
    <div className="feature-list">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <h2>Feature {index}</h2>
          <p>{feature}</p>
        </div>
      ))}
    </div>
  );
}

export default Feature;
