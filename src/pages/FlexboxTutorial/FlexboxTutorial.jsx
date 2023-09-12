import React from "react";
import Feature from "../../components/Feature/Feature";
import NumberList from "../../components/NumberList/NumberList";
import Chart from "../../components/Chart/Chart";
import "./FlexboxTutorial.scss";

function FlexboxTutorial(props) {
  const feature = [
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero vero beatae, odit earum sunt maxime, ex ad laborum esse minima rem assumenda itaque illo officia quia magni mollitia sit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque recusandae molestiae, optio obcaecati nesciunt sunt maiores tenetur maxime consectetur pariatur assumenda nemo, placeat dolores inventore dolorum fugit officiis enim! Asperiores?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius ad consequuntur dolorem amet laboriosam ut consectetur enim ullam eaque incidunt provident commodi id repellat.`,
  ];

  const wrapNumber = 10;
  const data = [10, 20, 50, 45, 90, 5];
  return (
    <div className="flexbox-tutorial">
      <Feature feature={feature} />
      <NumberList numbers={wrapNumber} />
      <Chart data={data} />
    </div>
  );
}

export default FlexboxTutorial;
