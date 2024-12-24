import { useState } from "react";

import "./Reset.css";
import "./App.css";

import Patterns from "./data/data";

import Header from "./components/Header";
import FilterCategories from "./components/FilterCategories";
import FilterLevel from "./components/FilterLevel";
import FilterFabrics from "./components/FilterFabrics.tsx"
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
			<section>
				<h3>Recherche </h3>
				<div className="Search">
					<h4>Par nom : </h4>
					<Search search={search} setSearch={setSearch} />
				</div>
				<div className="Search">
					<h4>Par catégorie :</h4>
					<FilterCategories filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
				</div>
				<div className="Search">
					<h4>Par niveau :</h4>
					<FilterLevel filterDifficulty={filterDifficulty} setFilterDifficulty={setFilterDifficulty} />
				</div>
				<div className="Search">
					<h4>Par tissu :</h4>
					<FilterFabrics filterFabric={filterFabric} setFilterFabric={setFilterFabric} />
				</div>
				<div className="Search">
					<h4>Par longeur de tissu nécessaire :</h4>
					<FilterMeter filterLength={filterLength} setFilterLength={setFilterLength} />
				</div>
			</section>
			<section className="Cards">
				<h3> Mes patrons de couture</h3>
				<article className="Patterns">
					{patternsFiltred.map((pattern) => {
						return (
							<PatternsCards key={pattern.pattern_id} pattern={pattern} />
						)
					})}
				</article>
			</section>
			<Footer />
		</>
	);
}

export default App;
