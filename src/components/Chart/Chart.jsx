import React from "react";
import "./Chart.scss";

// Chart component with chart items height based on data
function Chart(props) {
  return (
    <div className="chart">
      {props.data.map((value) => (
        <div
          style={{ "--chart-item-height": value.toString() + "%" }}
          className="chart-item"
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default Chart;
