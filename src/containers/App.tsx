import * as React from "react";
import { connect } from "react-redux";
import { registerAnswer, resetGame } from "../actions";
import { Answer, GameScore } from "../types/index";
import { AppState } from "../reducers/index";
import Gameboard from "../components/Gameboard";
import Scoreboard from "../components/Scoreboard";
import { scoring } from "../data/scoring";

import "../styles/index.css";
import KahootLogo from "../assets/KahootLogo";

interface StateProps {
	gamescore: GameScore;
	answers: string[];
}

interface DispatchProps {
	dispatch: any;
}

type Props = DispatchProps & StateProps;

class App extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		this.registerAnswer = this.registerAnswer.bind(this);
	}
	registerAnswer(answer: Answer) {
		this.props.dispatch(registerAnswer(answer));
	}
	render() {
		const { gamescore, answers, dispatch } = this.props;
		return (
			<div className="kahootgame">
				<div className="kahootgame__header">
					<h1>
						<div className="gametitle" role="presentation">
							<span className="gametitle__logo">
								<KahootLogo />
							</span>
							<span className="gametitle__points">Points</span>
						</div>
						<span className="invisible">Kahoot! Points</span>
					</h1>
				</div>
				<div className="main-container">
					<Gameboard
						answers={answers}
						onAnswer={(answer: Answer) => dispatch(registerAnswer(answer))}
					/>
				</div>
				<Scoreboard
					gamescore={gamescore}
					onReset={() => this.props.dispatch(resetGame())}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState): StateProps => ({
	gamescore: state.game.gamescore,
	answers: Object.keys(scoring)
});

export default connect(mapStateToProps)(App);
