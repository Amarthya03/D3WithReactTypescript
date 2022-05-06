import React from "react";

const Marks = ({ data, xScale, yScale }) => {
	return data.map((d) => (
		<rect
			className="mark"
			key={d.Country}
			y={yScale(d.Country)}
			width={xScale(d.Population)}
			height={yScale.bandwidth()}
		/>
	));
};

export default Marks;
