import { Answer } from "../types";
import { GameActionTypesKeys, GameActionTypes } from "./actionTypes";

export function registerAnswer(answer: Answer): GameActionTypes {
	return {
		type: GameActionTypesKeys.REGISTER_ANSWER,
		answer
	};
}

export function resetGame(): GameActionTypes {
	return {
		type: GameActionTypesKeys.RESET_GAME
	};
}
