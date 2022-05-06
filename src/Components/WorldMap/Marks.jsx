import React from "react";
import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

const Marks = ({ data }) => {
	return (
		<g className="marks">
			<>
				<path className="sphere" d={path({ type: "Sphere" })} />
				{data.features.map((feature) => (
					<path className="feature" d={path(feature)} />
				))}
			</>
		</g>
	);
};

export default Marks;
