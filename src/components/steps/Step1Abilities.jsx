import { useState } from "react";
import StepLayout from "../StepLayout";
import { rollDice } from "../../utils/dice";
import { abilityModifier } from "../../utils/modifiers";

export default function Step1Abilities({ next }) {
	const [scores, setScores] = useState(null);

	const rollAbilities = () => {
		const stats = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
		const rolled = {};
		stats.forEach(stat => {
			const score = rollDice(3,6); //Rule 1: Roll 3d6
			rolled[stat] = { score, mod: abilityModifier(score) }; //Rule 2: Bonus/Penalty
		});
		setScores(rolled);
	};

	return (
		<StepLayout
			title="Step 1: Roll Your Ability Scores"
			onNext={() => next({ abilities: scores })}
			nextDisabled={!scores}
		>
			{!scores ? (
				<button
					onClick={rollAbilities}
					className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white"
				>

					Roll Abilities (3d6)
				</button>
			) : (
				<div className="space-y-2">
					{Object.entries(scores).map(([stat, {score, mod}]) => (
						<p key={stat} className="text-lg">
							<span className="font-semibold">{stat}:</span> {score}{" "}
							<span>({mod >= 0 ? "+" : ""} {mod})</span>
						</p>
					))}
					<button
						onClick={rollAbilities}
						className="mt-4 px-2 py-2 border border-black rounded hover:bg-black hover:text-white"
				>
						Re-roll
					</button>
				</div>
			)}
		</StepLayout>
	);

}
