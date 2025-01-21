import { useState } from "react";

import "./Reset.css";
import "./App.css";

import Patterns from "./data/data";

import Header from "./components/Header";
import FilterCategories from "./components/FilterCategories";
import FilterLevel from "./components/FilterLevel";
import FilterFabrics from "./components/FilterFabrics.tsx";
import FilterMeter from "./components/FilterMeter";
import Search from "./components/Search";
import PatternsCards from "./components/PatternsCards";
import Footer from "./components/Footer";

function App() {
	const [search, setSearch] = useState("");
	const [filterCategory, setFilterCategory] = useState("");
	const [filterDifficulty, setFilterDifficulty] = useState("");
	const [filterFabric, setFilterFabric] = useState("");
	const [filterLength, setFilterLength] = useState("");

	const patternsFiltred = Patterns.filter(
		(pattern) =>
			pattern.name.toLowerCase().includes(search) &&
			pattern.category.includes(filterCategory) &&
			pattern.difficulty.some((diff) => diff.includes(filterDifficulty)) &&
			pattern.fabrics.some((fab) => fab.includes(filterFabric)) &&
			pattern.quantity.includes(filterLength),
	);

	return (
		<>
			<Header />
			<section className="SearchBar">
				<h3 className="Categories">Recherche </h3>
				<ul>
					<li className="Search">
						<h4>Par nom : </h4>
						<Search search={search} setSearch={setSearch} />
					</li>
					<li className="Search">
						<h4>Par catégorie :</h4>
						<FilterCategories
							filterCategory={filterCategory}
							setFilterCategory={setFilterCategory}
						/>
					</li>
					<li className="Search">
						<h4>Par niveau :</h4>
						<FilterLevel
							filterDifficulty={filterDifficulty}
							setFilterDifficulty={setFilterDifficulty}
						/>
					</li>
					<li className="Search">
						<h4>Par tissu :</h4>
						<FilterFabrics
							filterFabric={filterFabric}
							setFilterFabric={setFilterFabric}
						/>
					</li>
					<div className="Search">
						<h4>Par longeur de tissu nécessaire :</h4>
						<FilterMeter
							filterLength={filterLength}
							setFilterLength={setFilterLength}
						/>
					</div>
				</ul>
			</section>
			<section className="Cards">
				<h3 className="Categories"> Mes patrons de couture</h3>
				<article className="Patterns">
					{patternsFiltred.map((pattern) => {
						return <PatternsCards key={pattern.pattern_id} pattern={pattern} />;
					})}
				</article>
			</section>
			<Footer />
		</>
	);
}

export default App;
