import type { Dispatch } from "react";
import loupe from "../images/loupe.png";
import filter from "../images/filtre.png";

import "./Search.css";

interface SearchInterface {
	search: string;
	setSearch: Dispatch<React.SetStateAction<string>>;
	toggleFilters: () => void;
}

function Search({ search, setSearch, toggleFilters  }: SearchInterface) {
	return (
		<div className="SearchBarBox">
			<div className="SearchBox">
				<img
					className="Loupe"
					src={loupe}
					alt="picto loupe - crédit: Flaticon- "
				/>
				<input
					type="text"
					className="SearchInput"
					value={search}
					placeholder="Recherche"
					onChange={(event) => setSearch(event.target.value)}
				/>
			</div>
			<button type="button" className="Filter" onClick={toggleFilters}>
				<img src={filter} alt="picto search filter - crédit: Freepik" />
			</button>
		</div>
	);
}

export default Search;
