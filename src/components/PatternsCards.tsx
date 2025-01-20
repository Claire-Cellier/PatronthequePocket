import "./PatternsCards.css";

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

	return (
		<div className="cards">
			<div className="card">
				<div className="card-inner">
					<div className="card-front">
						<img src={pattern.image} alt={pattern.name} />
						<h2>{pattern.name}</h2>
						<h3>{pattern.designer}</h3>
					</div>
					<div className="card-back">
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
			</div>
		</div>
	);
}

export default PatternsCards;
