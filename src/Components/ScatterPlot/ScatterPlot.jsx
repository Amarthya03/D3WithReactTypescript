import React from "react";
import { scaleLinear, extent } from "d3";

import { useData } from "./useData";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import "./ScatterPlot.scss";

const width = 1000,
	height = 500;

const margin = { top: 20, right: 20, bottom: 20, left: 200 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const ScatterPlot = () => {
	const data = useData();

	if (!data) {
		return <pre>Loading...</pre>;
	}

	const xValue = (d) => d.petal_length;
	const yValue = (d) => d.sepal_width;

	const xScale = scaleLinear()
		.domain(extent(data, xValue))
		.range([0, innerWidth]);

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([0, innerHeight]);

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				<AxisBottom xScale={xScale} innerHeight={innerHeight} />
				<AxisLeft yScale={yScale} innerWidth={innerWidth} />
				<text
					className="axis-label"
					x={innerWidth / 2}
					textAnchor="middle"
				>
					Population
				</text>
				<Marks
					data={data}
					xScale={xScale}
					yScale={yScale}
					xValue={xValue}
					yValue={yValue}
				/>
			</g>
		</svg>
	);
};

export default ScatterPlot;
