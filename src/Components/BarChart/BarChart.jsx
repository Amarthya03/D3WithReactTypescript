import React from "react";
import { scaleBand, scaleLinear, max } from "d3";

import { useData } from "./useData";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import "./BarChart.scss";

const width = 1000,
	height = 500;

const margin = { top: 20, right: 20, bottom: 20, left: 200 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const BarChart = () => {
	const data = useData();

	if (!data) {
		return <pre>Loading...</pre>;
	}

	console.log(data[0]);

	const yScale = scaleBand()
		.domain(data.map((d) => d.Country))
		.range([0, innerHeight])
		.padding(0.3);

	const xScale = scaleLinear()
		.domain([0, max(data, (d) => d.Population)])
		.range([0, innerWidth]);

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				<AxisBottom xScale={xScale} innerHeight={innerHeight} />
				<AxisLeft yScale={yScale} />
				<text
					className="axis-label"
					x={innerWidth / 2}
					textAnchor="middle"
				>
					Population
				</text>
				<Marks data={data} xScale={xScale} yScale={yScale} />
			</g>
		</svg>
	);
};

export default BarChart;
