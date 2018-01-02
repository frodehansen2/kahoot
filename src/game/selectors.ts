import { createSelector } from "reselect";
import { AppState } from "../reducers";

export const getAnswers = (state: AppState) => state.game.answers;

export const pointsSelector = createSelector(getAnswers, answers =>
	answers.filter(a => a === "A")
);

// export const bonusSelector = createSelector(getAnswers, )
