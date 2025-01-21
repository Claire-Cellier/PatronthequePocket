import "./PatternsCards.css";
import machineACourdre from "../images/machineACoudre.png";
import mannequin from "../images/mannequin.png";
import metreRuban from "../images/metreRuban.png";
import tissu from "../images/tissu.png";

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

const mannequinPicto = (
	<img
		className="picto"
		src={mannequin}
		alt="picto mannequin - crédit: Freepik"
	/>
);

const machinePicto = (
	<img
		className="picto"
		src={machineACourdre}
		alt="machine à coudre - crédit: Good Ware"
	/>
);

const fabricPicto = (
	<img className="picto" src={tissu} alt="rouleau tissu - crédit: Freepik" />
);

const meterPicto = (
	<img
		className="picto"
		src={metreRuban}
		alt="picto mètre ruban - crédit: iconixar"
	/>
);

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
						<p className="pictoline">{mannequinPicto}:</p>
						<p>{pattern.category}</p>
						<p className="pictoline">{machinePicto} :</p>
						<p>{pattern.difficulty.join(", ")}</p>
						<p className="pictoline">{fabricPicto} :</p>
						<p>{pattern.fabrics.join(", ")}</p>
						<p className="pictoline">{meterPicto} :</p>
						<p>{pattern.quantity} m</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatternsCards;
