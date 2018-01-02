import * as React from "react";
import { Answer } from "../types/index";

export interface Props {
	answers: Answer[];
	onAnswer: (answer: Answer) => void;
}

const GameBoard: React.StatelessComponent<Props> = props => {
	return (
		<section className="gameboard">
			<div className="gameboard__header">
				<h2>Items</h2>
			</div>
			{props.answers.map((answer: Answer) => (
				<button
					key={answer}
					onClick={() => props.onAnswer(answer)}
					className="gameboard__item gameboard__item--selectable">
					{answer}
				</button>
			))}
		</section>
	);
};

export default GameBoard;
