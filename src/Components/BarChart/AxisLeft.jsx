import React from "react";

const AxisLeft = ({ yScale }) => {
	return yScale.domain().map((tickValue) => (
		<g
			className="tick"
			key={tickValue}
			transform={`translate(0,${yScale(tickValue)})`}
		>
			<text
				style={{ textAnchor: "end" }}
				dy="1.32em"
				dx="-.5em"
				// x={-3}
				// y={yScale(tickValue) + yScale.bandwidth() / 2}
			>
				{tickValue}
			</text>
		</g>
	));
};

export default AxisLeft;
