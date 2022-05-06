import React from "react";

const AxisBottom = ({ xScale, innerHeight }) => {
	return xScale.ticks().map((tickValue) => (
		<g
			className="tick"
			key={tickValue}
			transform={`translate(${xScale(tickValue)},0)`}
		>
			<line x1={0} y1={0} x2={0} y2={innerHeight} />
			<text style={{ textAnchor: "middle" }} y={innerHeight + 15}>
				{tickValue}
			</text>
		</g>
	));
};

export default AxisBottom;
