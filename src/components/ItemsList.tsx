import * as React from "react";
import { ItemScore } from "../types/index";

interface Props {
	items: ItemScore[];
}

interface ItemProps {
	itemScore: ItemScore;
}

class Item extends React.Component<ItemProps> {
	render() {
		const { answer, count, score } = this.props.itemScore;
		return (
			<li className="itemslist__item">
				<span className="itemslist__item__answer col col--answer">
					{answer}
				</span>
				<span className="itemslist__item__count  col col--count">{count}</span>
				<span className="itemslist__item__score col col--score">{score}</span>
			</li>
		);
	}
}

const ItemsList: React.StatelessComponent<Props> = ({ items }) => {
	return (
		<div className="itemslist">
			<div className="itemslist__header">
				<span className="col col--answer">Item</span>
				<span className="col col--count">
					<abbr title="Quantity">Qty</abbr>
				</span>
				<span className="col col--score">Score</span>
			</div>
			<ol className="itemslist__items">
				{items.map((i: ItemScore) => <Item itemScore={i} key={i.answer} />)}
			</ol>
		</div>
	);
};

export default ItemsList;
