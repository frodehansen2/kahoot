import * as React from "react";
import { Answer } from "../types/index";
import * as classNames from "classnames";
import { isTouchDevice } from "../utils";

export interface Props {
	answers: Answer[];
	onAnswer: (answer: Answer) => void;
}

const GameBoard: React.StatelessComponent<Props> = props => {
	return (
		<section className="gameboard">
			<div className="gameboard__header">
				<h2>Collect items</h2>
			</div>
			<div className="gameboard__itemsContainer">
				{props.answers.map((answer: Answer) => (
					<button
						type="button"
						key={answer}
						onClick={evt => {
							evt.preventDefault(); // prevent zoom
							props.onAnswer(answer);
						}}
						className={classNames("gameboard__item", {
							"gameboard__item--hoverable": !isTouchDevice()
						})}>
						{answer}
					</button>
				))}
			</div>
		</section>
	);
};

export default GameBoard;
