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
				<span className="itemslist__item__answer">{answer}</span>
				<span className="itemslist__item__count">{count}</span>
				<span className="itemslist__item__score">{score}</span>
			</li>
		);
	}
}

const ItemsList: React.StatelessComponent<Props> = ({ items }) => {
	return (
		<ol className="itemslist">
			{items.map((i: ItemScore) => <Item itemScore={i} key={i.answer} />)}
		</ol>
	);
};

export default ItemsList;
