import React from "react";

const Marks = ({ data, xScale, yScale, xValue, yValue }) => {
	return data.map((d) => (
		<rect
			className="mark"
			key={d.Country}
			cx={xScale(xValue(d))}
			cy={yScale(yValue(d))}
			radius={10}
		/>
	));
};

export default Marks;
