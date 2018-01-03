import * as React from "react";
import { GameScore } from "../types/index";
import ItemsList from "./ItemsList";

interface Props {
	gamescore: GameScore;
	onReset: () => void;
}

const Scoreboard: React.StatelessComponent<Props> = ({
	gamescore,
	onReset
}) => {
	return (
		<div className="scoreboard">
			<div className="scoreboard__header">
				<h2>Player items</h2>
			</div>
			<div className="scoreboard__itemslist">
				<ItemsList items={gamescore.itemScores} />
			</div>
			<div className="scoreboard__bonus">
				<h3>
					Bonuses: <span className="bonus-score"> {gamescore.bonus}</span>
				</h3>
			</div>
			<div className="scoreboard__total">
				<div className="scoreAndReset">
					<div className="scoreAndReset__score">
						<h3 className="totalScore" role="status" aria-live="polite">
							<span className="totalScore__label">Total: </span>
							<span className="totalScore__score">{gamescore.total}</span>
						</h3>
					</div>
					<div className="scoreAndReset__reset">
						<button
							type="button"
							onClick={() => onReset()}
							className="kahoot-button reset-game-button">
							New game
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
