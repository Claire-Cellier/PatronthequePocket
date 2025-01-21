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

	const patternsFiltred = Patterns.filter((pattern) => {
		const quantity = Number.parseFloat(pattern.quantity); 
		const filterVal = Number.parseFloat(filterLength); 

		return (
			pattern.name.toLowerCase().includes(search) &&
			pattern.category.includes(filterCategory) &&
			pattern.difficulty.some((diff) => diff.includes(filterDifficulty)) &&
			pattern.fabrics.some((fab) => fab.includes(filterFabric)) &&
			(!Number.isNaN(quantity) && !Number.isNaN(filterVal) ? quantity <= filterVal : true)
		);
	});

	return (
		<>
			<Header />
			<section className="Search">
				<Search search={search} setSearch={setSearch} />
				<section className="Filters">
					<ul>
						<li>
							<h4>Par catégorie :</h4>
							<FilterCategories
								filterCategory={filterCategory}
								setFilterCategory={setFilterCategory}
							/>
						</li>
						<li>
							<h4>Par niveau de couture :</h4>
							<FilterLevel
								filterDifficulty={filterDifficulty}
								setFilterDifficulty={setFilterDifficulty}
							/>
						</li>
						<li>
							<h4>Par type de tissu :</h4>
							<FilterFabrics
								filterFabric={filterFabric}
								setFilterFabric={setFilterFabric}
							/>
						</li>
						<div>
							<h4>Par métrage de tissu nécessaire :</h4>
							<FilterMeter
								filterLength={filterLength}
								setFilterLength={setFilterLength}
							/>
						</div>
					</ul>
				</section>
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
