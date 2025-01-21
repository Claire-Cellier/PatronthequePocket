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
				max="5"
				step="0.5"
				value={filterLength}
				onChange={(e) => setFilterLength(Number.parseFloat(e.target.value).toString())}
				className="length-slider"
			/>
			<h4>{filterLength}</h4>
		</>
	);
}

export default FilterMeter;
