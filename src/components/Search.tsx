import type { Dispatch } from "react";
import loupe from "../images/loupe.png";
import filter from "../images/filtre.png";

import "./Search.css";

interface SearchInterface {
	search: string;
	setSearch: Dispatch<React.SetStateAction<string>>;
}

function Search({ search, setSearch }: SearchInterface) {

	return (
		<div className="SearchBarBox">
			<div className="SearchBox">
				<input
					type="text"
					className="SearchInput"
					value={search}
					placeholder="Recherche"
					onChange={(event) => setSearch(event.target.value)}
				/>
				<button type="button" className="SearchButton">
					<img
						className="Loupe"
						src={loupe}
						alt="picto loupe - crédit: Flaticon- "
					/>
				</button>
			</div>
			<button type="button" className="Filter">
				<img src={filter} alt="picto search filter - crédit: Freepik" />
			</button>
		</div>
	);
}

export default Search;
