import { Answer, GameScore } from "../types";
import { GameActionTypes, GameActionTypesKeys } from "../actions/actionTypes";
import {
	calculateTotalScore,
	calculateTotalScoreWithoutBonus,
	groupAndSortAnswer,
	getInitialScores
} from "../game/index";

export interface GameState {
	answers: Answer[];
	gamescore: GameScore;
}

const defaultState: GameState = {
	answers: [],
	gamescore: {
		itemScores: getInitialScores(),
		total: 0,
		bonus: 0
	}
};

function calculateScores(answers: Answer[]): GameScore {
	const total = calculateTotalScore(answers);
	return {
		itemScores: groupAndSortAnswer(answers),
		total,
		bonus: total - calculateTotalScoreWithoutBonus(answers)
	};
}

function updateStateWithNewAnswer(state: GameState, answer: Answer): GameState {
	const answers = state.answers.concat([answer]);
	return {
		answers,
		gamescore: {
			...state.gamescore,
			...calculateScores(answers)
		}
	};
}

const GameReducer = (state = defaultState, action: GameActionTypes) => {
	switch (action.type) {
		case GameActionTypesKeys.REGISTER_ANSWER:
			return updateStateWithNewAnswer(state, action.answer);
		case GameActionTypesKeys.RESET_GAME:
			return { ...defaultState };
		default:
			return state;
	}
};

export default GameReducer;
