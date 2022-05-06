import React from "react";
import Marks from "./Marks";
import { useData } from "./useData";

import "./WorldMap.scss";

const width = 1600;
const height = 900;

const WorldMap = () => {
	const data = useData();

	if (!data) {
		return <pre>Loading...</pre>;
	}
	return (
		<svg width={width} height={height}>
			<Marks data={data} />;
		</svg>
	);
};

export default WorldMap;
