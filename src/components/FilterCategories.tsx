import { Dispatch, SetStateAction } from "react";
import Patterns from "../data/data";

import "./Filter.css";

interface FilterInterface {
	filterCategory: string;
	setFilterCategory: Dispatch<SetStateAction<string>>;
}
function FilterCategories({ filterCategory, setFilterCategory }: FilterInterface) {
	const categories = Array.from(
		new Set(
		  Patterns.flatMap((pattern) =>
			Array.isArray(pattern.category) ? pattern.category : [pattern.category]
		  )
		)
	  );
	//const categoriesFiltred = categories.filter((pattern) => pattern.category.includes(search));

	return (
		<select
			id="filter"
			value={filterCategory}
			onChange={(event) => setFilterCategory(event.target.value)}
		>
			<option value="">Toutes</option>
			{categories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
}

export default FilterCategories;
