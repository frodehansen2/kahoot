import { Answer } from "../types";

export enum GameActionTypesKeys {
	REGISTER_ANSWER = "REGISTER_ANSWER",
	RESET_GAME = "RESET_GAME"
}

export type GameActionTypes = RegisterAnswer | ResetGame;

export interface RegisterAnswer {
	type: GameActionTypesKeys.REGISTER_ANSWER;
	answer: Answer;
}

export interface ResetGame {
	type: GameActionTypesKeys.RESET_GAME;
}
