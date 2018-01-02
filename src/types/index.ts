export type Answer = string;

export interface ItemScore {
	answer: string;
	count: number;
	score: number;
}

export interface Score {
	score: number;
	bonus?: {
		score: number;
		count: number;
	};
}

export interface Scoring {
	[answer: string]: Score;
}

export interface GameScore {
	itemScores: ItemScore[];
	total: number;
	bonus: number;
}
