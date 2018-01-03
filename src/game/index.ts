import { Score, Answer, ItemScore } from "../types";
import { scoring } from "../data/scoring";

export const sortItemScore = (is1: ItemScore, is2: ItemScore) =>
	is1.score === is2.score
		? is1.answer < is2.answer ? -1 : 1
		: is1.score <= is2.score ? 1 : -1;

export function calculateAnswerScore(count: number, score: Score): number {
	if (!score.bonus || count < score.bonus.count) {
		return count * score.score;
	}
	const bonusAnswers = Math.floor(count / score.bonus.count);
	const rest = count % score.bonus.count;
	return rest * score.score + bonusAnswers * score.bonus.score;
}

export function calculateTotalScore(answers: Answer[]): number {
	let score = 0;
	Object.keys(scoring).forEach((key: string) => {
		score += calculateAnswerScore(
			answers.filter(answer => answer === key).length,
			scoring[key]
		);
	});
	return score;
}

export function calculateTotalScoreWithoutBonus(answers: Answer[]): number {
	let score = 0;
	answers.forEach((answer: string) => (score += scoring[answer].score));
	return score;
}

export function calculateTotalBonus(answers: Answer[]): number {
	return (
		calculateTotalScore(answers) - calculateTotalScoreWithoutBonus(answers)
	);
}

export function groupAndSortAnswer(answers: Answer[]): ItemScore[] {
	const scores: ItemScore[] = [];
	Object.keys(scoring).forEach((answer: string) => {
		const count = answers.filter(a => a === answer).length;
		scores.push({
			answer,
			count,
			score: calculateAnswerScore(count, scoring[answer])
		});
	});
	return scores.sort(sortItemScore);
}

export function getInitialScores(): ItemScore[] {
	const scores: ItemScore[] = [];
	Object.keys(scoring).forEach((answer: string) => {
		scores.push({
			answer,
			count: 0,
			score: 0
		});
	});
	return scores.sort(sortItemScore);
}
