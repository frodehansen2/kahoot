import { Answer } from "../types";
import { calculateTotalScore, calculateTotalBonus } from "./";

describe("calculation", () => {
	const scoreA = 50;
	const scoreA_bonus = 200;
	const scoreB = 30;
	const scoreB_bonus = 90;
	const scoreC = 20;
	const scoreD = 15;

	it("does calculate", () => {
		expect(0).toBe(0);
	});

	it("does calculate single A", () => {
		const answers: Answer[] = ["A"];
		expect(calculateTotalScore(answers)).toBe(scoreA);
	});

	it("does calculate double A without bonus", () => {
		const answers: Answer[] = ["A", "A"];
		expect(calculateTotalScore(answers)).toBe(scoreA * 2);
	});

	it("does calculate double A and one B without bonus", () => {
		const answers: Answer[] = ["A", "B", "A"];
		expect(calculateTotalScore(answers)).toBe(scoreA * 2 + scoreB);
	});

	it("does calculate tripple A with bonus", () => {
		let answers: Answer[] = ["A", "A", "A", "B"];
		expect(calculateTotalScore(answers)).toBe(scoreA_bonus + scoreB);
		answers = ["B", "A", "A", "A"];
		expect(calculateTotalScore(answers)).toBe(scoreA_bonus + scoreB);
		answers = ["A", "B", "A", "A"];
		expect(calculateTotalScore(answers)).toBe(scoreA_bonus + scoreB);
	});

	it("does calculate two tripple As with bonus", () => {
		const answers: Answer[] = ["A", "A", "A", "B", "A", "A", "A"];
		expect(calculateTotalScore(answers)).toBe(scoreA_bonus * 2 + scoreB);
	});

	it("does calculate two tripple As with bonus, and adds non bonus As", () => {
		const answers: Answer[] = ["A", "A", "A", "B", "A", "A", "A", "A"];
		expect(calculateTotalScore(answers)).toBe(
			scoreA_bonus * 2 + scoreB + scoreA
		);
	});

	it("does calculate bonus on B", () => {
		const answers: Answer[] = ["B", "B"];
		expect(calculateTotalScore(answers)).toBe(scoreB_bonus);
	});

	it("does calculate bonus on B, and adds single B score", () => {
		const answers: Answer[] = ["B", "B", "B"];
		expect(calculateTotalScore(answers)).toBe(scoreB_bonus + scoreB);
	});

	it("does calculate bonus on As and Bs + single As and Bs", () => {
		const answers: Answer[] = ["A", "B", "A", "B", "A", "B", "B", "B", "A"];
		expect(calculateTotalScore(answers)).toBe(
			scoreA_bonus + scoreA + scoreB_bonus * 2 + scoreB
		);
	});

	it("does calculate correct bonus total for two Bs", () => {
		const answers: Answer[] = ["B", "B"];
		expect(calculateTotalBonus(answers)).toBe(30);
	});

	it("does calculate correct bonus total for five Bs", () => {
		const answers: Answer[] = ["B", "B", "B", "B", "B"];
		expect(calculateTotalBonus(answers)).toBe(60);
	});

	it("does calculate correct bonus total for five Bs and five As", () => {
		const answers: Answer[] = [
			"B",
			"B",
			"B",
			"A",
			"A",
			"A",
			"A",
			"A",
			"B",
			"B"
		];
		expect(calculateTotalBonus(answers)).toBe(110);
	});

	it("does calculate single C", () => {
		const answers: Answer[] = ["C"];
		expect(calculateTotalScore(answers)).toBe(scoreC);
	});

	it("does calculate single D", () => {
		const answers: Answer[] = ["D"];
		expect(calculateTotalScore(answers)).toBe(scoreD);
	});
	it("does calculate correct total and bonus for multiple answers", () => {
		/*	Ax5, Bx2, Cx4, Dx3 */
		const answers: Answer[] = [
			"A",
			"D",
			"D",
			"A",
			"B",
			"A",
			"C",
			"C",
			"C",
			"C",
			"D",
			"B",
			"A",
			"A"
		];
		expect(calculateTotalScore(answers)).toBe(515);
		expect(calculateTotalBonus(answers)).toBe(80);
	});
});
