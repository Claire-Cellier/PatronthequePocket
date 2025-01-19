import { Dispatch, SetStateAction } from "react";
import Patterns from "../data/data";
import "./Filter.css";

interface FilterInterface {
	filterDifficulty: string;
	setFilterDifficulty: Dispatch<SetStateAction<string>>;
}

function FilterLevel({ filterDifficulty, setFilterDifficulty }: FilterInterface) {
	const difficulties = Array.from(
		new Set(
		  Patterns.flatMap((pattern) =>
			Array.isArray(pattern.difficulty) ? pattern.difficulty : [pattern.difficulty]
		  )
		)
	  );

	return (
		<select
			id="filter"
			value={filterDifficulty}
			onChange={(event) => setFilterDifficulty(event.target.value)}
		>
			<option value="">Tous</option>
			{difficulties.map((difficulty) => (
				<option key={difficulty} value={difficulty}>
					{difficulty}
				</option>
			))}
		</select>
	);
}

export default FilterLevel;
