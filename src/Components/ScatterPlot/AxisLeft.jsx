import React from "react";

const AxisLeft = ({ yScale, innerWidth }) => {
	return yScale.ticks().map((tickValue) => (
		<g
			className="tick"
			key={tickValue}
			transform={`translate(0,${yScale(tickValue)})`}
		>
			<line x2={innerWidth} />
			<text style={{ textAnchor: "end" }} dy="1.32em" dx="-.5em">
				{tickValue}
			</text>
		</g>
	));
};

export default AxisLeft;
