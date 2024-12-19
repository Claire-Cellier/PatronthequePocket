import "./PatternsCards.css";
import Patterns from "./data/data";

interface PatternsCardsInterface {
	pattern: {
		image: string;
		name: string;
		designer: string;
		category: string;
		difficulty: string[];
		fabrics: string[];
		quantity: string;
	};
}

function PatternsCards({ pattern }: PatternsCardsInterface) {
	let imgSrc = "src/images/" + pattern.image;

	return (
		<div className="cards">
			<img src={imgSrc} />
			<h2>{pattern.name}</h2>
			<h3>{pattern.designer}</h3>
			<div className="PatternDetails">
				<p>
					<b>Catégorie : </b> {pattern.category}
				</p>
				<p>
					<b>Niveau(x): </b> {pattern.difficulty.join(", ")}
				</p>
				<p>
					<b>Tissu(s): </b> {pattern.fabrics.join(", ")}
				</p>
				<p>
					<b>Quantité nécessaire: </b> {pattern.quantity} mètres
				</p>
				</div>
		</div>
	);
}

export default PatternsCards;
