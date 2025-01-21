import type { Dispatch, SetStateAction } from "react";
import Patterns from "../data/data";

import "./Filter.css";

interface FilterInterface {
	filterLength: string;
	setFilterLength: Dispatch<SetStateAction<string>>;
}
function FilterMeter({ filterLength, setFilterLength }: FilterInterface) {
	const meters = Array.from(
		new Set(
			Patterns.flatMap((pattern) =>
				Array.isArray(pattern.quantity)
					? pattern.quantity.map(String)
					: [String(pattern.quantity)],
			),
		),
	);

	meters.sort((a, b) => a.localeCompare(b));

	return (
		<>
			<input
				title="longeur"
				type="range"
				min="0.5"
				max="10"
				step="1"
				value={filterLength}
				onChange={(e) => setFilterLength(e.target.value)}
				className="length-slider"
			/>
			<h4>{filterLength} m</h4>
		</>
	);
}

export default FilterMeter;
