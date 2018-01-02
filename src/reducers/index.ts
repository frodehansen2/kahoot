import { combineReducers } from "redux";
import game, { GameState } from "./gameReducer";

export interface AppState {
	game: GameState;
}

const GameApp = combineReducers({ game });

export default GameApp;
